import "./App.css";
import Customer from "./Customer.tsx";

const customers = [
  {
    id: "1",
    avatar:
      "https://m.media-amazon.com/images/M/MV5BMGQ1ZGZmNTAtM2MyYi00NmZhLTkwYmYtNTNlZDRhMzU2ZTgwXkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg",
    customerName: "Joker",
    description:
      "The Joker is a supervillain appearing in American comic books published by DC Comics. The character was created by Bill Finger, Bob Kane, and Jerry Robinson, and first appeared in the debut issue of the comic book Batman on April 25, 1940",
    userProfile:
      "https://www.google.com/search?sca_esv=590159290&cs=1&sxsrf=AM9HkKmtn66ZWnJuj_jqFM105ppBpR--lA:1702395336946&q=Joker+(character)&stick=H4sIAAAAAAAAAEVSO2_TUBSOIzVK3CISV6pEFqIIpNIl9vWbJZXaMiAqJJqFyYp97TjxM_bVjd2xEjMVAz8AMSDEL2BgYCNCDEh0gwGxsJQVMdEk96Re_J3vPL9zT32jW-9FPTHVqINueuMw6jj-MBs6xM3yObf0yYSEDOJTYzrnGgsoFeoIMXqRPef4ZURuR5kJMRrCPsOqn1pX_I3eqCdJvu5bemDGzCcbaaQwjApsyKzuiHoiox1zSkpGS1gdQYRFbAb9eJazYFPzMNAeKkWAk9iALkTJI4Y1BVOFja8iwwhSZigBlU3KDEOcWCMKApxUjYwYwTIQ1kzYgCNK1ANDNWeRs25Eyxlggxa5DfIdbVKyBJQGYo7BoSl6AS3kaGaBEMmGBSAVp2vVmg0bkHK02OKqyqk4ncFbThdSV0WCSAeheinq8FCyotoWTEMDIyAswcnIDIZJpQmGm8BixmglVXBxnepPdBhN1imFLVhBFkIv0_G0n9wlt9n8_ffHdvsX9-LdpwvuO8c3HyVJ7oblEzccEhcPEmGHrx3FZExKYavN8yvxtIiFAb954pJBcpzgsVcKR8IB3zh2I_vqgB97AuL5gyQMXYeMk1i40-7ynZ6zJnreePkfhtb12d-v7la7T9GD919ffqnttypX3-dnJ_vt3b0WXztMouE4brVvX9zC3876e9t8fTAskjiJylb37fO77uXrfrfRWCQd_vvT36ucV7mzD28-1up1rllB1XrltLL1aqP1MAncrLO77nrvvMb9B_EeRxCNAwAA&sa=X&ved=2ahUKEwjBuczqnIqDAxWPbGwGHZ-6CKwQ7fAIegUIABDwBQ&biw=1920&bih=944&dpr=1",
  },
  {
    id: "2",
    avatar:
      "https://static.toiimg.com/thumb/msid-67521581,width-1280,resizemode-4/67521581.jpg",
    customerName: "Hannibal Lecter",
    description:
      "Dr. Hannibal Lecter is a character created by the American novelist Thomas Harris. Lecter is a serial killer who eats his victims",
    userProfile:
      "https://www.google.com/search?sca_esv=590159290&cs=1&sxsrf=AM9HkKmtn66ZWnJuj_jqFM105ppBpR--lA:1702395336946&q=Hannibal+Lecter&stick=H4sIAAAAAAAAAEVSO2_TUBSOIzVK3KI2roREFqoIpKpL7Os3Syq1RQytkGgWJsv2tWPHz8RXN3bGSsxUDPwAxIAQv4CBgY0KMSDRDQbEwlJWxETS3JN68Xe-8_zOPc21bquX9ERJQzhAm34YJztuYE9sl3iT4oJrLpwyITGDeGaML7hlSqkOEaNzjboXHH8dUTjJxISYRVmG1SC35vyt3rAnSYEeWHpkpswnG3miMIxKbMis7pD6IqNdc0wqRktYHUKERRwGg3RasGBT8zHQPqpEgKPUgC5EKRKGNQVThY2vIsOIcmYoEZVNygxDHFlDCgLcXE2MFMEyENZM2IArStQHQzWnibtqRKspYIOWhQPyXW1UsQSUR2KBwaEpegkt5GRqgRDJgQUgFecr1ZoDG5AKtNjisspMHE_hLccLqcsiUaKDUL0SdXgoWVEdC6ahkRERluBOyBSGyaURhpvA4oTRSq7g8iY1GOkwmqxTCluwokkMvUzX135yV9z61u-_P7Y7v7gX7z5dct85fus4ywovrp54sU08PMiE23zjKCUhqYSNDs8vxdMyFQb8-qlHBtlJhkO_Eo6EA7514iXO_IAf-wLi-YMsjj2XhFkq3Ot0-Z2euyJ6fnj9t2Pr5uwf1Hfr3afo4fuvL7809tu1-ff52el-Z3evzTcOs8QO03bn7uUd_O2sv7fNNwd2maVZUrW7b5_f965e97ut1iLp8N-f_l7tvM6dfXjzsdFscls1VG_WZrWNV2ubj-w0DR073jn2Fk3PG9x_jHTQv4wDAAA&sa=X&ved=2ahUKEwjBuczqnIqDAxWPbGwGHZ-6CKwQ7fAIegUIABCQBg",
  },
  {
    id: "3",
    avatar:
      "https://www.disneydining.com/wp-content/uploads/2023/06/jack-sparrow-back-in-theatres.png",
    customerName: "Captain Jack Sparrow",
    description:
      "Captain Jack Sparrow is a fictional character and the main protagonist of the Pirates of the Caribbean film series and franchise. An early iteration of Sparrow was created by screenwriters Ted Elliott and Terry Rossio, but the final version of the character was created by actor Johnny Depp, who also portrayed him.",
    userProfile:
      "https://www.google.com/search?sca_esv=590159290&cs=1&sxsrf=AM9HkKmtn66ZWnJuj_jqFM105ppBpR--lA:1702395336946&q=Captain+Jack+Sparrow&stick=H4sIAAAAAAAAAEVSPW_TQBiOIzVK3CIat0IiC1EEUtUl9vmbJZXSMiAqJJqFybLv7DjxZ-zT2c5YiZmKgR-AGBDiFzAwsFEhBiS6wYBYWMqKmEiau9SLn_d5P5_33uZGr9WP-qJUqmMAbnqTMOpC385siN0sP-eaS6eMcUghmhuzc-46hdKpRuA5x19F5E6UmSxGA8inWPVTa8Hf6I_7kuTrvqUHZkx9spFGCsWgRIZM646JJ1IamjNcUVpC6phFWNih0I-LnAabmocY7YFKZHAaG6wLVvKIYk1BRKHjq8AwgpQaSkBkk1DDEKfWmDABMFUjIwZsGQBpJtsAFCXiMUM1iwiuG5GqYNggZe4w-VCbVjQBpIGYI-bQFL1kLeSosJgQyWELACpK16o1h21AysFyi6sqc3FWsLecLaWuigSRzoTqlaizh5IV1bHYNCQwAkwTYIYLNkwqTRG7CSRmlFZSBZXXqf5UZ6PJOiFsC1aQhayXCT3tJ3fJbW7__vtjp_OLe_Hu0wX3neO3HyVJ7obVEze0sYtGiXCLbxzFeIIrYavD8yvxpIyFEb954uJRcpygiVcJR8KQbx27kbM44MeeAHh-mIShC_EkiYW7nR7f7cM10fcmV387tK7P_n59r957Ch68__ryS-OgXVt8n5-dHHT29tt84zCJ7Enc7ty5uI2-nQ72d_jmyC6TOImqdu_t83vu5etBr9VaJh3--zPYr53VudMPbz42mk1uuwbqzdq8tvVqY3dop3hRqPvQhkH3JLWzLCnOGtx_smJFL5EDAAA&sa=X&ved=2ahUKEwjBuczqnIqDAxWPbGwGHZ-6CKwQ7fAIegUIABDdBQ",
  },
  {
    id: "4",
    avatar:
      "https://atticusmullikin.com/wp-content/uploads/2019/05/Gollum-Smeagol-from-LOTR-The-Two-Towers.jpg",
    customerName: "Gollum",
    description:
      "Gollum is a fictional character in J. R. R. Tolkien's Middle-earth legendarium. He was introduced in the 1937 fantasy novel The Hobbit, and became important in its sequel, The Lord of the Rings. Gollum was a Stoor Hobbit of the River-folk who lived near the Gladden Fields.",
    userProfile:
      "https://www.google.com/search?sca_esv=590159290&cs=1&sxsrf=AM9HkKmtn66ZWnJuj_jqFM105ppBpR--lA:1702395336946&q=Smeagol&stick=H4sIAAAAAAAAAEVSPW_TUBSNIzUkbhGNKyGRhSoCqeoS-_mbJZXaMlEh0SxMlu1nx4n9bCd-erEzVmKmYuAHIAaE-AUMDGxUiAGJbjAgFpayIiaa5N3Wi8899_Pcd5tr3WaP9OQhC2V0KxwlZNuP3Knr02BanAlLn0ppwiGeW5MzobWASqkPEadzg_lngriMKDwytSHGQDjiWI9y55K_2Rv2FCUyI8eM7ZT7VCsnGseoxJbK6y6m4rRvT2jFaQXrQ4hwqMdhlM4KHmwbIQY6RJUMcJxa0IVqBeHY0DDT-Pg6sqw454YWM9Vm3LDksTNkIMDPdWKlCJaBsGHDBnxZYSEYuj0j_lUjVs0AW6wsPJDvG-OKJ6A8lgsMDkMzS2ihkpkDQhQPFoB0nF-pNjzYgFKgxRZXVebyZAZvOVlIXRWJiQlCzUo24aFUTfccmIbFVkx5gj-lMxgmV8YYbgLLU05ruYbL69RobMJoqskYbMGJpwn0sv3Q-ClcCOubv__-2Or8El68-3QufBfEzUdZVgRJ9SRIXBrgQSbdFhuHKR3RStroiOJKPCtTaSCuHwd0kB1leBRW0qG0L7aOAuJdHvDjUEKiuJ8lSeDTUZZK9zpdcbvnXxG9cLT8u4lzffYP6jv17lP08P3Xl18ae-3a5ff52fFeZ2e3LTYOMuKO0nbn7vkd_O2kv7slNgdumaUZqdrdt8_vBxev-91Wa5F08O9Pf7d2WhdOPrz52Gg2hc0aqjdr89rGq7UbxyRwh1ly2hD-A4w61RmDAwAA&sa=X&ved=2ahUKEwjBuczqnIqDAxWPbGwGHZ-6CKwQ7fAIegQIABAZ",
  },
  {
    id: "5",
    avatar:
      "https://static.standard.co.uk/s3fs-public/thumbnails/image/2015/11/06/08/22hungergamesmain0611a.jpg?width=1200",
    customerName: "Katniss Everdeen",
    description:
      "Katniss Everdeen is a fictional character and the protagonist of The Hunger Games trilogy written by American author Suzanne Collins.",
    userProfile:
      "https://www.google.com/search?sca_esv=590159290&cs=1&sxsrf=AM9HkKmtn66ZWnJuj_jqFM105ppBpR--lA:1702395336946&q=Katniss+Everdeen&stick=H4sIAAAAAAAAAEVSvW_TQByNIzVK3CISV0IiC1EEUpUl9vmbpZXasECFRLMwWfadHTv-jH262B0rMVMx8AcgBoT4CxgY2IgQAxLdYEAsLGVFTCTNXerF797v87275lafH8ZDEYoS8SC46QVR3IO-ndsQu3mx4JqrqIxxRCE6NWYLrrWCUqlOAKUzjcAFd9UKFU6cmyxHA8inWPUza8nfGE6GkuTrvqWHZkJjspHFCsWgRIZM-06IJ1IamjNcUVpC6oRlWNih0E_mBU02NQ8x2gOVyOA0MdgUrBQxxZqCiELXV4FhhBk9KCGRTUIPhji1JoQJgJkaGwlgZgCkmcyBtZmsnzmP4WYQqeYMG6QsHCYfatOKFoAsFAvEApqil2yEHM8tJkRymAFARdlGteYwB6QCrFxcdzkVZ3N2l7OV1HWTMNaZUL0SdXZRsqI6FtuGhEaIaQHM8Zwtk0lTxN4EEnNKK5mCyutSf6qz1WSdEOaCFeYRm2VCT_vJXXLb7d9_f-x2f3Ev3n264L5zfPtRmhZuVD1xIxu7aJwKt_jGKMEBroSdLs-vxZMyEcb89omLx-lxigKvEkbCId86dmNn-YAfewLg-cM0ilyIgzQR7nb7fG8IN8TQC67-dmRdP_v79b16_yl48P7ryy-Ng05t-X1-dnLQ3Rt0-MZRGttB0uneubiNvp3tD3b55tgu0ySNq07_7fN77uXr_X6rtSo6-vdnf1A7r3NnH958bDSbXLsG6s3aaW3n1Vb7oY2ToCh6I-LmyHWT8wb3H5iHtTeOAwAA&sa=X&ved=2ahUKEwjBuczqnIqDAxWPbGwGHZ-6CKwQ7fAIegUIABCPAg",
  },
];


function App() {
  return (
    <>
      <h1>Customer Data</h1>
      <hr />
      {customers.map((data) => {
        <Customer
          id={data.id}
          avatar={data.avatar}
          customerName={data.customerName}
          description={data.description}
          userProfile={data.userProfile}
        />;
      })}
    </>
  );
}

export default App;
