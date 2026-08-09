import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-start text-center px-4 pt-8">
      <img src="img.png" alt="Logo" className="w-20 h-20 md:w-48 md:h-48 rounded-full object-cover mb-6" />
      <h1 className="font-title text-2xl md:text-4xl mb-10 tracking-wide">
        Data Scientist | Engineer
      </h1>

      <div className="max-w-3xl mx-auto">
        <div className="text-xl md:text-2xl space-y-6 leading-relaxed text-left">
          <p>
            Hello, I'm <b>Muzaffar</b>. I am a Data Scientist based in Hyderabad, India.
          </p>
          <p>
            I have written patches for a few projects in the past such as GNOME/mutter and MQTTX, some of which can be found on my <a href="https://github.com/muzaffarmhd" className="underline hover:bg-black hover:text-white px-1">GitHub</a>.
          </p>
          <p>
            Additionally, I would love to talk of Data Science and AI in science if that interests you. Email me at <a href="mailto:mdmuxaffar@gmail.com" className="underline hover:bg-black hover:text-white px-1">mdmuxaffar [at] gmail [dot] com</a>.
          </p>
          <div className="mt-12 p-6 md:p-8 border-4 border-black bg-black/5">
            <h2 className="font-title text-xl md:text-2xl mb-6">social links</h2>
            <ul className="list-square ml-6 md:ml-8 space-y-4">
              <li className="break-all">Matrix IRC: <a href="#" className="underline hover:bg-black hover:text-white px-1">@muzaffarmhd:matrix.org </a></li>
              <li>GitHub: <a href="https://github.com/muzaffarmhd" className="underline hover:bg-black hover:text-white px-1">github.com/muzaffar</a></li>
              <li>Email: <a href="mailto:mdmuxaffar@gmail.com" className="underline hover:bg-black hover:text-white px-1">mdmuxaffar [at] gmail [dot] com</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 mt-8 w-full max-w-md justify-center">
          <p className="flex justify-center items-center">
            Love to read?
          </p>
        <Link
          to="/blog"
          className="px-6 py-3 text-xl md:text-2xl font-title lowercase hover:bg-black hover:text-white transition-colors w-full sm:w-auto text-center"
        >
          Blog
        </Link>
      </div>
    </div>
  );
}
