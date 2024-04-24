import { Card } from "../components/Card";
import mesin1 from "../assets/images/Memeriksa Busi 1.png";
import mesin2 from "../assets/images/Memeriksa Busi 2.png";
import sekring from "../assets/images/Mengganti Oli Mesin 1.png";

export const Busi = () => {
  // const [movies, setMovies] = useState([]);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-evenly flex-wrap other1:justify-evenly">
          <div className="max-w-md m-4 max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-200">
            <img src={mesin1} />
            <img className="mt-4" src={mesin2} />

            <h1 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
              Memeriksa Busi
            </h1>
            <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>Lepaskan tutup busi dari busi</li>
              <li>Bersihkan kotoran di sekitar lubang busi</li>
              <li>
                Lepaskan busi dengan menggunakan kunci yang ada dalam kool kit
              </li>
              <li>
                Periksa elektroda dan porselin di bagian pusat untuk adanya
                endapan pengikisan atau pengotoran berlebih
              </li>
              <li>
                Jika banyak terdapat pengikisan atau endapan, ganti busi segera
              </li>
              <li>
                Bersihkan busi yang kotor karena karbon atau basah dengan
                pembersih busi atau gunakan sikat kawat
              </li>
              <li>Pastikan cincin perapat busi dalam kondisi baik</li>
              <li>
                Pasang busi dengan cincin busi dengan tangan untuk menghindari
                pemasangan yang miring
              </li>
              <li>Kencangkan busi</li>
              <li>Pasang kembali tutup busi, pastikan busi tidak terjepit</li>
            </ul>
          </div>

          <div className="max-w-md m-4 max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-200">
            <img src={sekring} />
            <h1 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
              Mengganti Oli
            </h1>
            <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>
                Jika mesin dingin, biarkanlah mesin berputar stasioner selama 3
                sampai 5 menit
              </li>
              <li>Putar kunci OFF dan tunggu selama 2 sampai 3 menit</li>
              <li>
                Letakkan sepeda motor anda pada standar tengah di atas permukaan
                yang keras dan rata
              </li>
              <li>Letakkan wadah pembuangan di bawah baut pembuangan oli</li>
              <li>
                Lepaskan penutup pengisian oli, buka pembuangan oli, dan cincin
                perapat untuk membuang oli
              </li>
              <li>
                Pasang sebuah cincin perapat pada baut pembuangan oli,
                kencangkan baut pembuangan oli
              </li>
              <li>Isi bak mesin dengan oli yang dianjurkan</li>
              <li>Periksa tinggi permukaan oli</li>
              <li>Pastikan bahwa tidak terjadi kebocoran oli</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
