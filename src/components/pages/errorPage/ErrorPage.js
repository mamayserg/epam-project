import Link from 'next/link'
// import "./errorPage.css";

const ErrorPage = () => (
  <section className="page_404 h-full">
    <div className="w-full">
      <div className="flex-row">
        <div className="flex-col flex justify-cente">
          <div className="m-auto w-5/6 text-center">
            <div className="four_zero_four_bg">
              <h1 className="text-center ">404</h1>
            </div>

            <div className="contant_box_404">
              <h3 className="h2">Look like you're lost</h3>

              <p>the page you are looking for not avaible!</p>
              <Link className="link_404" href="/search">
              <a> Go to Home</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ErrorPage;
