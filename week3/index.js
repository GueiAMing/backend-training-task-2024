// 題目 - 樂呵呵健身房
// 樂呵呵健身房目前有 8 位會員

const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];
const purchaseRecords = [];
function addPurchaseRecord(name, courses){
  if ((!members.includes(name)) || (typeof courses !== "number" || Number.isNaN(courses)) ){
    console.log('輸入錯誤，請輸入有效的會員名稱和課程數量。');
    return
  } 
  let pricePerCourse = 0;
  if (courses > 1 && courses <= 10){
    pricePerCourse = 1500; 
  }
  else if (courses > 10 && courses <= 20){
    pricePerCourse = 1300;
  }
  else if (courses > 20){
    pricePerCourse = 1100;
  }
  let price = 0;
  price = pricePerCourse * courses;
  console.log(`新增購買記錄成功！會員 ${name} 購買 ${courses} 堂課，總金額為 ${price} 元。`)
  const memberData = {};
  memberData.name = name;
  memberData.pricePerCourse = pricePerCourse;
  memberData.courses = courses;
  memberData.price = price;
  purchaseRecords.push(memberData);
}

addPurchaseRecord("Alice", 4);
addPurchaseRecord("Bob", 12);
addPurchaseRecord("Charlie", 25);
addPurchaseRecord("Hannah", 50);
addPurchaseRecord("名稱", "課程數量");
// 第一階段：新增課程購買記錄（優惠定價）
// 撰寫函式 addPurchaseRecord，用於新增會員購買課程的記錄，並依購買數量套用優惠價格：

// 購買數量 / 單價 (每堂課)

// 1-10 堂 / 1500 元
// 11-20 堂 / 1300 元
// 21 堂以上 / 1100 元


// 記錄內容：

// 會員名稱 (name)：字串
// 購買課程數量 (courses)：數字
// 課程單價（自動計算）
// 總金額（courses × 單價）
// 功能要求：
// 使用陣列 purchaseRecords 儲存每筆記錄。
// 如果輸入無效（如名稱為空或數值不正確），提示輸入錯誤，並不儲存該記錄。
// 成功新增後，印出「新增購買記錄成功！會員 [會員名稱] 購買 [數量] 堂課，總金額為 [金額] 元。」
// 舉例：
// addPurchaseRecord("Alice", 4); >> 印出 console.log 文字為 新增購買記錄成功！會員 Alice 購買 4 堂課，總金額為 6000 元。
// addPurchaseRecord("Bob", 12); >> 印出 console.log 文字為 新增購買記錄成功！會員 Bob 購買 12 堂課，總金額為 15600 元。
// addPurchaseRecord("Charlie", 25); >> 印出 console.log 文字為 新增購買記錄成功！會員 Charlie 購買 25 堂課，總金額為 27500 元。
// addPurchaseRecord("Hannah", 50); >> 印出 console.log 文字為 新增購買記錄成功！會員 Hannah 購買 50 堂課，總金額為 55000 元。
// addPurchaseRecord("名稱", “課程數量”); >> 印出 console.log 文字為 輸入錯誤，請輸入有效的會員名稱和課程數量。


// 第二階段：計算目前的總營業額
// 新增函式 calculateTotalPrice，計算目前的總營業額為多少。

function calculateTotalPrice(){
  let totalPrice = 0;
  purchaseRecords.forEach(function(item){
    // console.log(item); // 先印出來看是否每個物件都有出現，然後再做加總
    totalPrice += item.price;
  })
  console.log(`目前總營業額為 ${totalPrice} 元`);
}

calculateTotalPrice();
// 印出 console.log 文字為 目前總營業額為 ${totalPrice} 元

// 第三階段：篩選出還沒有購課的會員
// 新增函式 filterNoPurchaseMember，篩選特定條件的會員記錄。例如：未購買過課程的會員，並依序列出

function filterNoPurchaseMember(){
  let purchaseMembers = []; //宣告空陣列要放有買課程的會員
  purchaseRecords.forEach(function(member){ //用forEach把買過的課程的會員加入陣列
    purchaseMembers.push(member.name);
  });

  let result = members.filter(function(item){
    return !purchaseMembers.includes(item);// 非purchaseMembers裡的名字會被收集起來
  });
  let resultString = "";
  result.forEach(function(member){
    resultString += " " + member;
  })
  console.log(`未購買課程的會員有：${resultString}`);//最後打印未購買課程的會員
}

filterNoPurchaseMember();
// 印出 console.log 文字為 未購買課程的會員有：.......
//----------------------
// 印出的結果是：
// 新增購買記錄成功！會員 Alice 購買 4 堂課，總金額為 6000 元。
// 新增購買記錄成功！會員 Bob 購買 12 堂課，總金額為 15600 元。
// 新增購買記錄成功！會員 Charlie 購買 25 堂課，總金額為 27500 元。
// 新增購買記錄成功！會員 Hannah 購買 50 堂課，總金額為 55000 元。
// 輸入錯誤，請輸入有效的會員名稱和課程數量。
// 目前總營業額為 104100 元
// 未購買課程的會員有： Diana Evan Fiona George