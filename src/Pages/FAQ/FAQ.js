import React from 'react';
import { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import './FAQ.css';

const FAQ = () => {
    const [faq1, setFaq1] = useState(false);
    const [faq2, setFaq2] = useState(false);
    const [faq3, setFaq3] = useState(false);
    const [faq4, setFaq4] = useState(false);

    return (
        <div className='faq-container'>
            <Button
                onClick={() => setFaq1(!faq1)}
                aria-controls="collapse-text"
                aria-expanded={faq1}
            >
                কম্পিউটার ব্যবহার করলে কি চোখের ক্ষতি হয়?
            </Button>

            <div>
                <Collapse in={faq1} dimension="width">
                    <div id="collapse-text">
                        <table>
                            <tr>
                                <td>
                                    কম্পিউটার ব্যবহার করলে চোখের সরাসরি কোন ক্ষতি হয় না। তবে দীর্ঘক্ষণ ব্যবহার করলে চোখের পলক কম পড়ে এবং চোখ কিছুটা শুষ্ক হয়ে যায়। ঘাড়, মাথা বা চোখে ব্যথা অনুভূত হতে পারে। দুর্বল ও ক্লান্তি লাগতে পারে। এ সকল উপসর্গকে ‘কম্পিউটার ভিশন সিন্ড্রম’ বলা হয়ে থাকে।
                                    কম্পিউটারে কাজ করার সময় ঘন ঘন চোখের পলক ফেলা, ২/১ ঘন্টা কম্পিউটারে কাজ করার পর চোখের ৫/৭ মিনিট বিশ্রাম নেয়া বা অন্য কোন দিকে তাকানো, মনিটরের সামনে সোজাসুজি বসে কাজ করা ইত্যাদি কম্পিউটার ব্যবহারে আরামদায়ক হতে পারে।
                                    কম্পিউটারের এল.সি.ডি মনিটর সাধারণ মনিটরের তুলনায় চোখের জন্য আরামদায়ক। এজন্য দীর্ঘক্ষণ কাজ করার জন্যে পিসিতে এলসি.ডি মনিটর কিংবা ল্যাপটপ কম্পিউটার ব্যবহার করা যেতে পারে।
                                    এরপরও কারও চোখের কষ্ট থাকলে চক্ষু বিশেষজ্ঞ এর নিকট চোখের পাওয়ার, চোখের প্রেসার পরীক্ষা করানো উচিত, কারণ চোখের কোন সমস্যার কারণেও কম্পিউটার ব্যবহার আরামদায়ক নাও হতে পারে।
                                </td>
                            </tr>
                        </table>
                    </div>
                </Collapse>
            </div>
            <Button
                onClick={() => setFaq2(!faq2)}
                aria-controls="collapse-text"
                aria-expanded={faq2}
            >
                চোখের ছানি বলতে কি বোঝায়?
            </Button>

            <div>
                <Collapse in={faq2} dimension="width">
                    <div id="collapse-text">
                        <table>
                            <tr>
                                <td>
                                    চোখের ভেতরে একটি লেন্স থাকে- যার সাহায্যে আলোকে ফোকাস করে রেটিনায় পতিত হয় এবং আমরা দেখতে পারি। এই লেন্স এবং লেন্সের আবরণ (ক্যাপসুল) যদি বয়সজনিত কারণে প্রদাহ, ডায়াবেটিস বা অন্য কোন রোগের কারণে বা আঘাতে ঘোলা হয়ে যায়- তাকে চোখের ছানি বলে। সামান্য ঘোলা হলে তাকে অপরিপক্ক ছানি  বলা বলা হয় এবং পরিপুর্ণ ঘোলা হলে- পক্ক ছানি বলা হয়।
                                    চোখের ছানির প্রধান কারণ- বয়সজনিত। এই প্রকার ছানিকে বলা হয় সেনাইল ক্যাটারাক্ট।
                                    প্রথম অবস্থায় এই ছানি পড়লেও চশমার পাওয়ার পরিবর্তন করে দৃষ্টিশক্তির উন্নতি করা সম্ভব, কিন্তু একটি সময়ে তাও সম্ভব হয় না। তখন অপারেশন এর মাধ্যমে ঐ ঘোলা লেন্সটির অপসারণ করে কৃত্রিম লেন্স বসানো হয়।
                                    কোন ওষুধের মাধ্যমে ছানিকে সরানো যায় না। সুতরাং অপারেশনই হল চোখের ছানির একমাত্র চিকিৎসা। তবে অপারেশন এবং কৃত্রিম লেন্সের মধ্যে অনেক প্রকারভেদ রয়েছে।
                                </td>
                            </tr>
                        </table>
                    </div>
                </Collapse>
            </div>
            <Button
                onClick={() => setFaq3(!faq3)}
                aria-controls="collapse-text"
                aria-expanded={faq3}
            >
                My doctor suggested certain specific types of therapies. Do you do them?
            </Button>

            <div>
                <Collapse in={faq3} dimension="width">
                    <div id="collapse-text">
                        <table>
                            <tr>
                                <td>
                                    We work closely with referring physicians to ensure high quality of appropriate care. If you have questions about specific treatments please give us to know.
                                </td>
                            </tr>
                        </table>
                    </div>
                </Collapse>
            </div>
            <Button
                onClick={() => setFaq4(!faq4)}
                aria-controls="collapse-text"
                aria-expanded={faq4}
            >
                How long are initial evaluation appointments?
            </Button>

            <div>
                <Collapse in={faq4} dimension="width">
                    <div id="collapse-text">
                        <table>
                            <tr>
                                <td>
                                    Evaluations take 30-60 minutes. You will also need to come 15 minutes early in order to fill out the necessary paperwork so that the therapist can spend the full time scheduled with you.
                                </td>
                            </tr>
                        </table>
                    </div>
                </Collapse>
            </div>
        </div>
    );
};

export default FAQ;