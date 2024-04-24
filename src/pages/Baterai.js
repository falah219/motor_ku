

import { Card } from "../components/Card"
import mesin1 from "../assets/images/Melepas Baterai 1.png"
import mesin2 from "../assets/images/Melepas Baterai 2.png"
import sekring from "../assets/images/Sekring Putus 1.png"



export const Baterai = () => {

  // const [movies, setMovies] = useState([]);
  

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-evenly flex-wrap other1:justify-evenly">
            <div className="max-w-md m-4 max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img src={mesin1} />
                <h1 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Baterai Mati</h1>
                    <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>Lakukan pengisian baterai dengan menggunakan charger baterai sepeda motor</li>
                        <li>Lepaskan baterai dari sepeda motor sebelum melakukan pengisian</li>
                        <li>Jika pada saat pengisian tidak dapat dipulihkan, kunjungi bengkel AHASS Anda</li>
                    </ul>
                <h1 className="ml-3 mt-6 text-lg font-semibold text-gray-900 dark:text-white">Melepas Baterai</h1>
                    <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>Pastikan Kunci Kontak pada posisi OFF</li>
                        <li>Buka Jok</li>
                        <li>Lepaskan penutup baterai dengan melepas sekrup</li>
                        <li>Lepaskan terminal negative dari baterai</li>
                        <li>Lepaskan terminal positif dari baterai</li>
                        <li>Lepaskan baterai dengan hati-hati dan jangan sampai menjatuhkan mur-mur terminal</li>
                    </ul>
                <h1 className="ml-3 mt-6 text-lg font-semibold text-gray-900 dark:text-white">Membersihkan Terminal Baterai</h1>
                    <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>Lepaskan baterai</li>
                        <li>Jika terminal-terminal mulai berkarat dan sudah dilapisi dengan zat berwarna putih, cucilah dengan air hangat dan lap bersih</li>
                        <li>Jika terminal sudah sangat berkarat, bersihkan dan gosok terminal dengan sikat atau amplas. Kenakan kacamata pengaman</li>
                        <li>Setelah dibersihkan, pasang kembali baterai</li>
                    </ul>
            </div>

            <div className="max-w-md m-4 max-h-fit bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <img src={sekring} />
                <h1 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">Sekring Putus dan Penanganannya</h1>
                    <ul className="ml-3 max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                        <li>Buka jok</li>
                        <li>Lepaskan penutup baterai</li>
                        <li>Buka penutup kotak sekring</li>
                        <li>Tarik keluar sekring-sekring satu per satu dan periksa dari adanya sekring yang putus. Gantikan selalu sekring yang putus dengan sekring cadangan yang berukuran sama</li>
                        <li>Pasang penutup kotak sekring</li>
                        <li>Pasang penutup baterai</li>
                        <li>Tutup jok</li>
                        <li>Jika sekring seringkali putus, kemungkinan ada masalah pada sistem kelistrikan. Periksakan sepeda motor Anda ke bengkel terdekat.</li>
                    </ul>
            </div>
        </div>

        
      </section>
    </main>
  )
}