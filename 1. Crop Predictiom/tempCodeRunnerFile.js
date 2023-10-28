$("#inputState").change(function () {
  var StateSelected = $(this).val();
  var optionsList;
  var htmlString = "";

  switch (StateSelected) {
    case "ANDHRA PRADESH":
      optionsList = AndraPradesh;
      break;
    case "ARUNACHAL PRADESH":
      optionsList = ArunachalPradesh;
      break;
    case "ASSAM":
      optionsList = Assam;
      break;
    case "BIHAR":
      optionsList = Bihar;
      break;
    case "CHATISGARH":
      optionsList = Chhattisgarh;
      break;
    case "GOA":
      optionsList = Goa;
      break;
    case "GUJARAT":
      optionsList = Gujarat;
      break;
    case "HARYANA":
      optionsList = Haryana;
      break;
    case "HIMACHAL":
      optionsList = HimachalPradesh;
      break;
    case "JAMMU AND KASHMIR":
      optionsList = JammuKashmir;
      break;
    case "JHARKHAND":
      optionsList = Jharkhand;
      break;
    case "KARNATAKA":
      optionsList = Karnataka;
      break;
    case "KERALA":
      optionsList = Kerala;
      break;
    case "MADHYA PRADESH":
      optionsList = MadhyaPradesh;
      break;
    case "MAHARASHTRA":
      optionsList = Maharashtra;
      break;
    case "MANIPUR":
      optionsList = Manipur;
      break;
    case "MEGHALAYA":
      optionsList = Meghalaya;
      break;
    case "MIZORAM":
      optionsList = Mizoram;
      break;
    case "NAGALAND":
      optionsList = Nagaland;
      break;
    case "ORISSA":
      optionsList = Orissa;
      break;
    case "PUNJAB":
      optionsList = Punjab;
      break;
    case "RAJASTHAN":
      optionsList = Rajasthan;
      break;
    case "SIKKIM":
      optionsList = Sikkim;
      break;
    case "TAMIL NADU":
      optionsList = TamilNadu;
      break;
    // case  "TELANGANA":
    //     optionsList = Telangana;
    //     break;
    case "TRIPURA":
      optionsList = Tripura;
      break;
    case "UTTARANCHAL":
      optionsList = Uttaranchal;
      break;
    case "UTTAR PRADESH":
      optionsList = UttarPradesh;
      break;
    case "WEST BENGAL":
      optionsList = WestBengal;
      break;
    case "ANDAMAN And NICOBAR ISLANDS":
      optionsList = AndamanNicobar;
      break;
    case "CHANDIGARH":
      optionsList = Chandigarh;
      break;
    case "DADAR NAGAR HAVELI":
      optionsList = DadraHaveli;
      break;
    case "DAMAN AND DUI":
      optionsList = DamanDiu;
      break;
    case "DELHI":
      optionsList = Delhi;
      break;
    case "LAKSHADWEEP":
      optionsList = Lakshadeep;
      break;
    case "PONDICHERRY":
      optionsList = Pondicherry;
      break;
  }

  for (var i = 0; i < optionsList.length; i++) {
    htmlString =
      htmlString +
      "<option value='" +
      optionsList[i] +
      "'>" +
      optionsList[i] +
      "</option>";
  }
  $("#inputDistrict").html(htmlString);
});
