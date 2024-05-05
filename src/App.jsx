import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="topNav">
        <div>
          <div>
            <a href="">
              <img src="Images\home-logo.png" alt="" width={"48px"} />
            </a>
          </div>
          <div className="hadertext">
            <h3>হাদিস সমূহ</h3>
            <h6>হাদিস পড়ুন শিখুন এবং জানুন</h6>
          </div>
        </div>
        <div className="searchIcon">
          <img src="Images\search.svg" alt="" />
          <input
            className="searchInputSize"
            type="text"
            placeholder="Search Hadith"
          />
        </div>
        <button>
          <img src="Images\setting.svg" alt="" />
        </button>
      </header>
      <div className="grid_cont">
        <nav>
          <ul>
            <li>
              <a href="">
                <img src="Images\home.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="Images\home.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="Images\subject.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="Images\bookmark.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="Images\goto.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src="Images\goto.svg" alt="" />
              </a>
            </li>
          </ul>
        </nav>
        <div className="grid-body">
          <div className="bookclassmenu">
            <div className="bookclass">
              <button>
                <span>বই</span>
              </button>
              <button>
                <span>অধ্যায়</span>
              </button>
            </div>
            <div className="filter-search">
              <img src="Images\search.svg" alt="" />
              <input className="" type="text" placeholder="Search For Filter" />
            </div>
            <div className="book-menu-content">
              <div className="bookCard">
                <div>
                  <h3>B</h3>
                  <img
                    src="Images\later-back.svg"
                    alt=""
                    width="56"
                    height="62"
                  />
                </div>
                <div>
                  <h4>সহিহ বুখারী</h4>
                  <div>
                    সর্বমোট হাদিস - <span>৭৫৬৩</span>
                  </div>
                </div>
              </div>
              <div className="bookCard">
                <div>
                  <h3>B</h3>
                  <img
                    src="Images\later-back.svg"
                    alt=""
                    width="56"
                    height="62"
                  />
                </div>
                <div>
                  <h4>সহিহ বুখারী</h4>
                  <div>
                    সর্বমোট হাদিস - <span>৭৫৬৩</span>
                  </div>
                </div>
              </div>
              <div className="bookCard">
                <div>
                  <h3>B</h3>
                  <img
                    src="Images\later-back.svg"
                    alt=""
                    width="56"
                    height="62"
                  />
                </div>
                <div>
                  <h4>সহিহ বুখারী</h4>
                  <div>
                    সর্বমোট হাদিস - <span>৭৫৬৩</span>
                  </div>
                </div>
              </div>
              <div className="bookCard">
                <div>
                  <h3>B</h3>
                  <img
                    src="Images\later-back.svg"
                    alt=""
                    width="56"
                    height="62"
                  />
                </div>
                <div>
                  <h4>সহিহ বুখারী</h4>
                  <div>
                    সর্বমোট হাদিস - <span>৭৫৬৩</span>
                  </div>
                </div>
              </div>
              <div className="bookCard">
                <div>
                  <h3>B</h3>
                  <img
                    src="Images\later-back.svg"
                    alt=""
                    width="56"
                    height="62"
                  />
                </div>
                <div>
                  <h4>সহিহ বুখারী</h4>
                  <div>
                    সর্বমোট হাদিস - <span>৭৫৬৩</span>
                  </div>
                </div>
              </div>
              <div className="bookCard">
                <div>
                  <h3>B</h3>
                  <img
                    src="Images\later-back.svg"
                    alt=""
                    width="56"
                    height="62"
                  />
                </div>
                <div>
                  <h4>সহিহ বুখারী</h4>
                  <div>
                    সর্বমোট হাদিস - <span>৭৫৬৩</span>
                  </div>
                </div>
              </div>
              <div className="bookCard">
                <div>
                  <h3>B</h3>
                  <img
                    src="Images\later-back.svg"
                    alt=""
                    width="56"
                    height="62"
                  />
                </div>
                <div>
                  <h4>সহিহ বুখারী</h4>
                  <div>
                    সর্বমোট হাদিস - <span>৭৫৬৩</span>
                  </div>
                </div>
              </div>
              <div className="bookCard">
                <div>
                  <h3>B</h3>
                  <img
                    src="Images\later-back.svg"
                    alt=""
                    width="56"
                    height="62"
                  />
                </div>
                <div>
                  <h4>সহিহ বুখারী</h4>
                  <div>
                    সর্বমোট হাদিস - <span>৭৫৬৩</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-body-content">
            <div className="bread-crumb">
              <div>
                <img src="Images/bread-crumb-book.svg" alt="" />
                <img src="Images/forword.svg" alt="" />
                <a href="">Bukhari</a>
                <img src="Images/forword.svg" alt="" />1
              </div>
              <div className="bread-footer">
                <div>
                  <img src="Images/bread.svg" alt="" />
                  <div>
                    <h3>সহিহ বুখারী</h3>
                    <div>
                      সর্বমোট হাদিস - <span>৭৫৬৩</span>
                    </div>
                  </div>
                </div>
                <h3>صحيح البخاري</h3>
              </div>
            </div>
            <div className="content-hader">
              <div>
                <div className="number-box">১</div>
                <div>ওহীর সূচনা অধ্যায়</div>
              </div>
            </div>
            <div className="content-body">
              <div className="align-content2">
                <div className="align-content">
                  <img class="w-8" src="Images/book.svg" alt="" />
                  <h3>১/১. অধ্যায়ঃ</h3>
                </div>
                <div>
                  <p>
                    আল্লাহ্‌র রসূল (সাল্লাল্লাহু 'আলাইহি ওয়া সাল্লাম)- এর প্রতি
                    কীভাবে ওয়াহী [১] শুরু হয়েছিল।
                  </p>
                </div>
                <div>
                  <p>
                    এ মর্মে আল্লাহ তা’আলার বাণীঃ “নিশ্চয়ই আমি আপনার প্রতি সেরূপ
                    ওয়াহী প্রেরণ করেছি যেরূপ নূহ ও তাঁর পরবর্তী নবীদের প্রতি
                    ওয়াহী প্রেরণ করেছিলাম”। (সূরা আন-নিসা ৪/১৬৩)
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <div className="content-body-box-img">
                    <img src="Images/count-star.svg" alt="" />
                    <div> ১</div>
                  </div>
                  <div className="content-body-box">
                    <div>
                      <p className="arabic">
                        حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ
                        الزُّبَيْرِ، قَالَ حَدَّثَنَا سُفْيَانُ، قَالَ
                        حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ الأَنْصَارِيُّ، قَالَ
                        أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ التَّيْمِيُّ،
                        أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ،
                        يَقُولُ سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ ـ رضى الله عنه
                        ـ عَلَى الْمِنْبَرِ قَالَ سَمِعْتُ رَسُولَ اللَّهِ صلى
                        الله عليه وسلم يَقُولُ ‏ "‏ إِنَّمَا الأَعْمَالُ
                        بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى،
                        فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ
                        إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا
                        هَاجَرَ إِلَيْهِ
                      </p>
                    </div>
                    <div>
                      <p className="content-body-box-head">
                        ‘আলক্বামাহ ইব্‌নু ওয়াক্কাস আল-লায়সী (রহঃ) থেকে বর্ণিত:
                      </p>
                      <p>
                        <span>
                          আমি ‘উমর ইব্‌নুল খাত্তাব (রাঃ)-কে মিম্বারের উপর
                          দাঁড়িয়ে বলতে শুনেছিঃ আমি আল্লাহর রসূল (সাল্লাল্লাহু
                          ‘আলাইহি ওয়া সাল্লাম)-কে বলতে শুনেছিঃ কাজ (এর প্রাপ্য
                          হবে) নিয়ত অনুযায়ী। আর মানুষ তার নিয়ত অনুযায়ী প্রতিফল
                          পাবে। তাই যার হিজরত হবে ইহকাল লাভের অথবা কোন মহিলাকে
                          বিবাহ করার উদ্দেশ্যে- তবে তার হিজরত সে উদ্দেশ্যেই হবে,
                          যে জন্যে, সে হিজরত করেছে। (৫৪, ২৫২৯, ৩৮৯৮, ৫০৭০, ৬৬৮৯,
                          ৬৯৫৩; মুসলিম ২৩/৪৫ হাঃ ১৯০৭, আহমাদ ১৬৮) ( আধুনিক
                          প্রকাশনী- ১, ইসলামিক ফাউন্ডেশন ১)
                        </span>
                      </p>
                    </div>
                    <div className="content-body-box-foot">
                      <div>
                        <div>
                          <div>হাদিসের মান :</div>
                          <button>
                            <p>সহিহ হাদিস</p>
                          </button>
                        </div>
                      </div>
                      <div>
                        <div>
                          <img src="Images/copy.svg" alt="copy" />
                        </div>
                        <div>
                          <img src="Images/bookmark_2.svg" alt="bookmark" />
                        </div>
                        <div id="share">
                          <img src="Images/share.svg" alt="share" />
                        </div>
                        <div id="report">
                          <img src="Images/report.svg" alt="report" />
                        </div>
                        <div id="direct">
                          <img src="Images/direct.svg" alt="direct" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <h1>hello</h1>
      </div> */}
      {/* <div>welcome</div> */}
    </>
  );
}

export default App;
