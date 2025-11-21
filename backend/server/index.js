import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Resend 초기화
const resend = new Resend(process.env.RESEND_API_KEY);

// 미들웨어
app.use(cors());
app.use(express.json());

// 영상 재생 오류 신고 엔드포인트
app.post('/api/report-video-error', async (req, res) => {
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
      ${userMessage ? `<p><strong>추가 메시지:</strong><br/>${userMessage}</p>` : ''}

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

    res.json({ 
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
});

// 헬스 체크
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`🚀 서버가 포트 ${port}에서 실행 중입니다.`);
  console.log(`📧 Resend API 키: ${process.env.RESEND_API_KEY ? '설정됨 ✓' : '설정 안됨 ✗'}`);
  console.log(`📬 관리자 이메일: ${process.env.ADMIN_EMAIL || 'neohum77@gmail.com'}`);
});

