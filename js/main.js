const Clinic_info = [
  {
    href: `https://app.dianthus.info/reservation/clinic1.php`,
    icon: `<img src="https://linnetchen.github.io/Outpatient-Clinic-Overview/img/懷寧.png" alt="">`,
    title: `懷寧院區`,
    address: `台北市中正區懷寧街78號`,
  },
  {
    href: `https://app.dianthus.info/reservation/clinic1.php`,
    icon: `<img src="https://linnetchen.github.io/Outpatient-Clinic-Overview/img/宜蘊.png" alt="">`,
    title: `禾馨宜蘊生殖中心`,
    address: `台北/桃園/台中`,
  },
  {
    icon: `<img src="https://linnetchen.github.io/Outpatient-Clinic-Overview/img/懷寧.png" alt="">`,
    title: `小士林院區`,
    address: `台北市士林區中正路289號`,
  },
  {
    icon: `<img src="https://linnetchen.github.io/Outpatient-Clinic-Overview/img/新生.png" alt="">`,
    title: `新生院區`,
    address: `台北市大安區新生南路3段2號`,
  },
  {
    icon: `<img src="https://linnetchen.github.io/Outpatient-Clinic-Overview/img/小禾馨.png" alt="">`,
    title: `小禾馨院區`,
    address: `台北市大安區新生南路3段4號`,
  },
  {
    icon: `<img src="https://linnetchen.github.io/Outpatient-Clinic-Overview/img/民權.png" alt="">`,
    title: `(小)民權院區`,
    address: `台北市內湖區民權東路六段42號`,
  },
  {
    icon: `<img src="/img/民權.png" alt="">`,
    title: `民權二館眼科院區`,
    address: `台北市內湖區行忠路195號`,
  },
  {
    icon: `<img src="/img/民權.png" alt="">`,
    title: `健康管理診所`,
    address: `台北市內湖區民權東路六段40號`,
  },
  {
    icon: `<img src="/img/中心.png" alt="">`,
    title: `乳房健康管理中心`,
    address: `中心`,
  },
  {
    icon: `<img src="/img/楊梅怡仁.png" alt="">`,
    title: `楊梅怡仁院區`,
    address: `桃園市楊梅區楊新北路321巷30號`,
  },
  {
    icon: `<img src="/img/懷寧.png" alt="">`,
    title: `桃園院區`,
    address: `桃園市桃園區經國二路36號`,
  },
  {
    icon: `<img src="/img/懷寧.png" alt="">`,
    title: `禾馨桃園乳房診所`,
    address: `桃園市桃園區經國路839號五樓`,
  },
  {
    icon: `<img src="/img/懷寧.png" alt="">`,
    title: `禾馨安和婦幼診所`,
    address: `台中市西屯區安和路118-18號`,
  },
];

const clinicContainer = document.getElementById("container");

Clinic_info.forEach((clinic) => {
  const box = document.createElement("div");
  box.className = "box";
//   box.href = clinic.href;

  const iconDiv = document.createElement("div");
  iconDiv.className = "icon";
  iconDiv.innerHTML = clinic.icon;

  const textDiv = document.createElement("div");
  textDiv.className = "text";

  const titleDiv = document.createElement("div");
  titleDiv.className = "title";
  titleDiv.innerText = clinic.title;

  const addressDiv = document.createElement("div");
  addressDiv.className = "address";
  addressDiv.innerText = clinic.address;

  textDiv.appendChild(titleDiv);
  textDiv.appendChild(addressDiv);
  box.appendChild(iconDiv);
  box.appendChild(textDiv);
  clinicContainer.appendChild(box);
});

// const clinicContainer = document.getElementById("container");

// Clinic_info.forEach((clinic) => {
//   const box = document.createElement("a");
//   box.className = "box";
//   box.href = clinic.href;

//   const iconDiv = document.createElement("div");
//   iconDiv.className = "icon";
//   iconDiv.innerHTML = clinic.icon;

//   const textDiv = document.createElement("div");
//   textDiv.className = "text";

//   const titleDiv = document.createElement("div");
//   titleDiv.className = "title";
//   titleDiv.innerText = clinic.title;

//   const addressDiv = document.createElement("div");
//   addressDiv.className = "address";
//   addressDiv.innerText = clinic.address;

//   textDiv.appendChild(titleDiv);
//   textDiv.appendChild(addressDiv);
//   box.appendChild(iconDiv);
//   box.appendChild(textDiv);
//   clinicContainer.appendChild(box);
// });
