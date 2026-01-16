"use client";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function Datenschutz() {
    return (
        <main className="bg-black min-h-screen text-white pt-32 pb-20 px-6 relative overflow-hidden">
            <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center p-4 bg-yellow-500/10 rounded-2xl mb-6">
                        <Shield className="w-10 h-10 text-yellow-400" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
                        <span className="text-yellow-400">Datenschutz</span>
                    </h1>
                    <p className="text-gray-400 text-lg">Datenschutzerklärung gemäß DSGVO</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-xl space-y-10"
                >
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-400">1. Verantwortlicher</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
                            <strong className="text-white">CXZ-IT Solutions</strong><br />
                            Anthony Schley<br />
                            Lessingstr. 6a<br />
                            66914 Waldmohr<br /><br />
                            E-Mail: kontakt@cxz-it.de<br />
                            Telefon: +49 173 9179752
                        </p>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-400">2. Erhebung und Speicherung personenbezogener Daten</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Beim Besuch unserer Website werden automatisch Informationen an den Server übermittelt.
                            Diese Informationen werden temporär in einem sog. Logfile gespeichert.
                            Folgende Informationen werden dabei ohne Ihr Zutun erfasst: IP-Adresse des anfragenden Rechners,
                            Datum und Uhrzeit des Zugriffs, Name und URL der abgerufenen Datei, Website, von der aus der Zugriff erfolgt
                            (Referrer-URL), verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers.
                        </p>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-400">3. Kontaktformular</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                            von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                        </p>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-400">4. Ihre Rechte</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
                        </p>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                            <li>Recht auf Auskunft</li>
                            <li>Recht auf Berichtigung oder Löschung</li>
                            <li>Recht auf Einschränkung der Verarbeitung</li>
                            <li>Recht auf Widerspruch gegen die Verarbeitung</li>
                            <li>Recht auf Datenübertragbarkeit</li>
                        </ul>
                    </section>

                    <hr className="border-white/10" />

                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-yellow-400">5. SSL-Verschlüsselung</h2>
                        <p className="text-gray-300 leading-relaxed">
                            Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte
                            eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
                            des Browsers von "http://" auf "https://" wechselt.
                        </p>
                    </section>
                </motion.div>
            </div>
        </main>
    );
}
