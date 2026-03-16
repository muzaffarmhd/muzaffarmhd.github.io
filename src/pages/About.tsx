export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <h1 className="font-title text-2xl md:text-4xl mb-10 lowercase inline-block pb-2">
        About Me
      </h1>
      <div className="text-xl md:text-2xl space-y-6 leading-relaxed">
        <p>
          Hello, I'm <b>Muzaffar</b>. I am currently a comp sci student at Chaitanya Bharathi Institute of Technology, Hyderabad. 
          </p>
        <p>

           I explore and write software. I have worked on web and desktop applications. I'm currenlty exploring linux graphics stack.
        </p>
        <p>
          Most of the work that I've done can be found on my <a href="https://github.com/muzaffarmhd" className="underline hover:bg-black hover:text-white px-1">GitHub</a>.

        </p>
        <div className="mt-12 p-6 md:p-8 border-4 border-black bg-black/5">
          <h2 className="font-title text-xl md:text-2xl mb-6">social links</h2>
          <ul className="list-square ml-6 md:ml-8 space-y-4">
            <li className="break-all">Matrix IRC: <a href="#" className="underline hover:bg-black hover:text-white px-1">@muzaffarmhd:matrix.org </a></li>
            <li>GitHub: <a href="https://github.com/muzaffarmhd" className="underline hover:bg-black hover:text-white px-1">github.com/muzaffar</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
