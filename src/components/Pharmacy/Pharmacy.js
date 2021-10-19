import React from 'react';
import "./Pharmacy.css"

const Pharmacy = () => {
    return (
        <div className="pharmacy-container">
            <div className="pharmacy">
                <p><small>BROWSING CATEGORY</small></p>
                <h1>Pharmacy</h1>
            </div>
            <div className=" mx-auto p-5 pharmacy-details">
                <h1>INSAF PHARMACY BRANCH LIST ADDRESS PHONE NUMBER</h1>
                <p>Insaf Pharmacy has several branches across the country. Each branch has almost all types of local and foreign medicines. Insaf Pharmacy has several branches, especially in Dhaka city. Today we will see the Insaf Pharmacy Branch List Address and Phone Number here. All kinds of benefits can be taken by contacting in case of emergency. You can also find out which branch is near your house from here. It is a large organization. So all kinds of medicines are available…</p>
            </div>
            <div className="mx-auto p-5 pharmacy-history">
                <h3>History of pharmacy</h3>
                <p>The beginnings of pharmacy are ancient. When the first person expressed juice from a succulent leaf to apply to a wound, this art was being practiced. In the Greek legend, Asclepius, the god of the healing art, delegated to Hygieia the duty of compounding his remedies. She was his apothecary or pharmacist. The physician-priests of Egypt were divided into two classes: those who visited the sick and those who remained in the temple and prepared remedies for the patients.</p>
                pIn ancient Greece and Rome and during the Middle Ages in Europe, the art of healing recognized a separation between the duties of the physician and those of the herbalist, who supplied the physician with the raw materials from which to make medicines. The Arabian influence in Europe during the 8th century AD, however, brought about the practice of separate duties for the pharmacist and physician. The trend toward specialization was later reinforced by a law enacted by the city council of Bruges in 1683, forbidding physicians to prepare medications for their patients. In America, Benjamin Franklin took a pivotal step in keeping the two professions separate when he appointed an apothecary to the Pennsylvania Hospital.
            </div>
        </div>
    );
};

export default Pharmacy;