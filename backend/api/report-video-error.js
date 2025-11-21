import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // OPTIONS 요청 처리 (CORS preflight)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // POST 요청만 허용
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { post, userEmail, userMessage } = req.body;

    if (!post) {
      return res.status(400).json({ error: '영상 정보가 필요합니다.' });
    }

    // 이메일 내용 구성
    const emailHtml = `
      <h2>🚨 YouTube 영상 재생 오류 신고</h2>
      
      <h3>영상 정보:</h3>
      <ul>
        <li><strong>ID:</strong> ${post.id}</li>
        <li><strong>제목:</strong> ${post.contents}</li>
        <li><strong>키워드:</strong> ${post.key_words}</li>
        <li><strong>채널:</strong> ${post.channel_name}</li>
        <li><strong>재생시간:</strong> ${post.play_time}분</li>
        <li><strong>URL:</strong> <a href="${post.url}">${post.url}</a></li>
      </ul>

      ${userEmail ? `<p><strong>신고자 이메일:</strong> ${userEmail}</p>` : ''}
      ${userMessage ? `<p><strong>추가 메시지:</strong><br/>${userMessage.replace(/\n/g, '<br/>')}</p>` : ''}

      <hr/>
      <p><small>신고 시간: ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</small></p>
    `;

    // Resend로 이메일 전송
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.ADMIN_EMAIL || 'neohum77@gmail.com',
      subject: `[안전한줄] 영상 재생 오류 신고 - ${post.contents}`,
      html: emailHtml,
    });

    console.log('이메일 전송 성공:', data);

    res.status(200).json({ 
      success: true, 
      message: '신고가 접수되었습니다. 감사합니다!',
      emailId: data.id 
    });

  } catch (error) {
    console.error('이메일 전송 오류:', error);
    res.status(500).json({ 
      error: '신고 처리 중 오류가 발생했습니다.',
      details: error.message 
    });
  }
}

