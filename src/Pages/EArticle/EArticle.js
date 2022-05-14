import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';

const EArticle = () => {
    const [article1, setArticle1] = useState(false);
    const [article2, setArticle2] = useState(false);

    return (
        <>
            <Button
                onClick={() => setArticle1(!article1)}
                aria-controls="collapse-text"
                aria-expanded={article1}
            >
                উচ্চ রক্তচাপ ও চোখের জটিলতা
            </Button>

            <div>
                <Collapse in={article1} dimension="width">
                    <div id="collapse-text">
                        <table>
                            <tr>
                                <td>
                                    উচ্চ রক্তচাপের কারণে চোখের নানা জটিলতা হতে পারে। উচ্চ রক্তচাপ যত বেশি মাত্রায় হবে এবং যত বেশিদিন যাবত রোগী ভুগবে তত বেশি চোখের জটিলতা হবার সম্ভাবনা বাড়বে। উচ্চ রক্তচাপের প্রথম দিকে রোগীর চোখে কোন উপসর্গ নাও থাকতে পারে। চিকিৎসকরাই প্রথমে চোখের ভিতরের জটিলতা গুলো নির্ণয় করে থাকেন। তবে অল্প বয়সের রোগীদের যদি অনেক বেশি রক্তচাপ হয়ে যায় তবে দৃষ্টি কমে যাবার মত নানা সমস্যা হতে পারে। চোখের রেটিনাতে পানি জমে যাওয়া, অপটিক স্নায়ুতে পানি জমে যাওয়া, রেটিনায় রক্তক্ষরণ, রেটিনার রক্তনালী বন্ধ হয়ে যাওয়া বা রেটিনার স্তর আলাদা হওয়া অর্থাৎ ডিটাচমেন্টের মতো জটিলতা হতে পারে। গর্ভবর্তী মায়েদের একলামসিয়া হলে,  রক্তচাপ অনেক বেড়ে গেলে এ সমস্যাগুলি বেশি দেখা  যায়।
                                </td>
                            </tr>
                        </table>
                    </div>
                </Collapse>
            </div>

            <Button
                onClick={() => setArticle2(!article2)}
                aria-controls="collapse-text"
                aria-expanded={article2}
            >
                What Is Glaucoma?
            </Button>

            <div>
                <Collapse in={article2} dimension="width">
                    <div id="collapse-text">
                        <table>
                            <tr>
                                <td>
                                Glaucoma is a disease that damages the eyes optic nerve. The optic nerve is connected to the retina — a layer of light-sensitive tissue lining the back of the eye — and is made up of many nerve fibers, like an electric cable is made up of many wires. It is the optic nerve that sends signals from your retina to your brain, where these signals are interpreted as the images you see. In the healthy eye, a clear fluid called aqueous (pronounced AY-kwee-us) humor circulates inside the front portion of your eye. To maintain a constant healthy eye pressure, your eye continually produces a small amount of aqueous humor while an equal amount of this fluid flows out of your eye. If you have glaucoma, the aqueous humor does not flow out of the eye properly. Fluid pressure in the eye builds up and, over time, causes damage to the optic nerve fibers.
                                </td>
                            </tr>
                        </table>
                    </div>
                </Collapse>
            </div>
        </>
    );
};

export default EArticle;