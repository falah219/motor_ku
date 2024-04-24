

import { Card } from "../components/Card"
import mesin1 from "../assets/images/Menghidupkan Mesin 1.png"
import mesin2 from "../assets/images/Menghidupkan Mesin 2.png"


export const Mesin = () => {

  // const [movies, setMovies] = useState([]);
  

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-evenly flex-wrap other1:justify-evenly">
            <div className="max-w-md m-4 max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img src={mesin1} />
                <img className="mt-4 max-w-none" src={mesin2} />
                <h1 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Menghidupkan mesin baik mesin yang panas maupun dingin</h1>
                    <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>Putar kunci kontak ke posisi ON</li>
                        <li>Pindahkan gigi transmisi ke Netral (indicator N)</li>
                        <li>Menggunakan tombol stater elektrik dengan gas tangan sedikit terbuka, tekan tombol stater.</li>
                        <li>Panaskan mesin dengan membuka dan menutup gas tangan sedikit.</li>
                    </ul>
                <h1 className="ml-3 mt-6 text-lg font-semibold text-gray-900 dark:text-white">Jika mesin panas, tapi tidak dapat dihidupkan</h1>
                    <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>Ikuti Langkah 1-3 dengan judul mesin dingin, jika mesin tidak dapat dihidupkan</li>
                        <ul className="ml-3 max-w-md space-y-1 text-gray-400 list-disc list-inside dark:text-gray-400">
                            <li>Putar kunci kontak ke posisi off</li>
                            <li>Putar gas tangan sampai terbuka penuh</li>
                            <li>Putar mesin beberapa kali dengan kickstarter</li>
                            <li>Ikuti Langkah 1-3 pada mesin dingin</li>
                            <li>Jika mesin hidup, buka gas tangan sedikit apabila putaran staran stasioner mesin tidak stabil</li>
                            <li>Jika mesin tidak hidup tunggu 10 detik sebelum mencoba Kembali Langkah 1-4 lagi</li>
                        </ul>
                    </ul>    
                <h1 className="ml-3 mt-6 text-lg font-semibold text-gray-900 dark:text-white">Motor Starter Bekerja Tapi Mesin Tidak dapat dihidupkan </h1>
                    <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>Periksa Urutan Menghidupkan Mesin</li>
                        <li>Periksa bahwa bensin ada di dalam tangka bahan bakar</li>
                        <li>Periksa apakah lampu indicator mal-fungsi PGM-FI menyala</li>
                        <ul className="ml-3 max-w-md space-y-1 text-gray-400 list-disc list-inside dark:text-gray-400">
                            <li>Apabila lampu menyala coba bawa motor anda ke bengkel terdekat</li>
                        </ul>
                    </ul>
                <h1 className="ml-3 mt-6 text-lg font-semibold text-gray-900 dark:text-white">Membersihkan pernapasan Bak Mesin </h1>
                    <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>Ikuti Langkah 1-3 dengan judul mesin dingin, jika mesin tidak dapat dihidupkan</li>
                        <ul className="ml-3 max-w-md space-y-1 text-gray-400 list-disc list-inside dark:text-gray-400">
                            <li>Letakkan wadah pembuangan di bawah selang pernapasan bak mesin</li>
                            <li>Lepaskan selang pernapasan bak mesin dan keluarkan dendapan – endapannya</li>
                            <li>Pasang kembali selang pernapasan bak mesin</li>
                        </ul>
                    </ul>
                <h1 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Motor Starter Bekerja Tapi Mesin Tidak dapat dihidupkan </h1>
                    <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>Periksa pada bagian sekring (Sekring Putus)</li>
                        <li>Periksa pada bagian koneksi baterai atau korosi pada terminal baterai</li>
                        <li>Periksa kondisi baterai</li>
                        <ul className="ml-3 max-w-md space-y-1 text-gray-400 list-disc list-inside dark:text-gray-400">
                            <li>Jika masalah berlanjut periksakanlah sepeda motor anda di bengkel terdekat</li>
                        </ul>
                    </ul>
            </div>
        </div>
      </section>
    </main>
  )
}