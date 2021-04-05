const Template=()=>{
  return(

<>
  <div className="container">
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1">
          <a className="link-secondary" href="#">Subscribe</a>
        </div>
        <div className="col-4 text-center">
          <a className="blog-header-logo text-dark" href="#">Large</a>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <a className="link-secondary" href="#" aria-label="Search">
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="mx-3" role="img" viewBox="0 0 24 24">
              <title>Search</title>
              <circle cx="10.5" cy="10.5" r="7.5" />
              <path d="M21 21l-5.2-5.2" />
            </svg>
          </a>
          <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
        </div>
      </div>
    </header>
    <div className="nav-scroller py-1 mb-2">
      <nav className="nav d-flex justify-content-between">
        <a className="p-2 link-secondary" href="#">World</a>
        <a className="p-2 link-secondary" href="#">U.S.</a>
        <a className="p-2 link-secondary" href="#">Technology</a>
        <a className="p-2 link-secondary" href="#">Design</a>
        <a className="p-2 link-secondary" href="#">Culture</a>
        <a className="p-2 link-secondary" href="#">Business</a>
        <a className="p-2 link-secondary" href="#">Politics</a>
        <a className="p-2 link-secondary" href="#">Opinion</a>
        <a className="p-2 link-secondary" href="#">Science</a>
        <a className="p-2 link-secondary" href="#">Health</a>
        <a className="p-2 link-secondary" href="#">Style</a>
        <a className="p-2 link-secondary" href="#">Travel</a>
      </nav>
    </div>
  </div>
  <main className="container">
    <div className="row mb-2">
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">World</strong>
            <h3 className="mb-0">Featured post</h3>
            <div className="mb-1 text-muted">Nov 12</div>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural
              lead-in to additional content.</p>
            <a href="#" className="stretched-link">Continue reading</a>
          </div>
          <div className="col-auto d-none d-lg-block">
            <svg className="bd-placeholder-img" width={200} height={250} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
            </svg>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">Design</strong>
            <h3 className="mb-0">Post title</h3>
            <div className="mb-1 text-muted">Nov 11</div>
            <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to
              additional content.</p>
            <a href="#" className="stretched-link">Continue reading</a>
          </div>
          <div className="col-auto d-none d-lg-block">
            <svg className="bd-placeholder-img" width={200} height={250} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-8">
        <article className="blog-post">
          <h2 className="blog-post-title">Sample blog post</h2>
          <p className="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>
          <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap.
            Basic typography, images, and code are all supported.</p>
        </article>{/* /.blog-post */}
        <nav className="blog-pagination" aria-label="Pagination">
          <a className="btn btn-outline-primary" href="#">Older</a>
          <a className="btn btn-outline-secondary disabled" href="#" tabIndex={-1} aria-disabled="true">Newer</a>
        </nav>
      </div>
      <div className="col-md-4">
        <div className="p-4 mb-3 bg-light rounded">
          <h4 className="fst-italic">About</h4>
          <p className="mb-0">Saw you downtown singing the Blues. Watch you circle the drain. Why don't you let me
            stop by? Heavy is the head that <em>wears the crown</em>. Yes, we make angels cry, raining down
            on earth from up above.</p>
        </div>
      </div>
    </div>{/* /.row */}
  </main>{/* /.container */}
  <footer className="blog-footer">
    <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
    <p>
      <a href="#">Back to top</a>
    </p>
  </footer>
</>









  )
}
export default Template