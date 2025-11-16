@if ($paginator->hasPages())
    <div class="col-12 my-3">

        <nav aria-label="Page navigation example">
            <ul class="pagination">
                @if ($paginator->onFirstPage())
                    <li class="page-item disabled">
                        <a class="page-link">← Previous</a>
                    </li>
                @else
                    <li class="page-item">
                        <a href="{{ $paginator->previousPageUrl() }}" rel="prev" class="page-link">← Previous</a>
                    </li>
                @endif

                @foreach ($elements as $element)
                    @if (is_string($element))
                        <li class="disabled page-item">
                            <a class="page-link">{{ $element }}</a>
                        </li>
                    @endif

                    @if (is_array($element))
                        @foreach ($element as $page => $url)
                            @if ($page == $paginator->currentPage())
                                <li class="active my-active page-item">
                                    <a class="page-link">{{ $page }}</a>
                                </li>
                            @else
                                <li class="page-item">
                                    <a href="{{ $url }}" class="page-link">{{ $page }}</a>
                                </li>
                            @endif
                        @endforeach
                    @endif
                @endforeach

                @if ($paginator->hasMorePages())
                        <li class="page-item">
                            <a href="{{ $paginator->nextPageUrl() }}" rel="next" class="page-link">Next →</a>
                        </li>
                @else
                        <li class="page-item disabled">
                            <a class="page-link">Next →</a>
                        </li>
                @endif
            </ul>
        </nav>
    </div>
@endif
