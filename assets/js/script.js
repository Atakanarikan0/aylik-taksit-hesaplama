let loanAmount = Number(prompt('Kredi Miktarını giriniz :'));
let insatallment = Number(prompt('Taksit sayısını giriniz :'));
let interest = Number(prompt('Faiz oranını yüzde kaçtır:'));

if (interest === 0) {
  let payment = loanAmount / insatallment;
  alert('aylık ödenecek tutar: ' + payment);
}else {
  interest = (interest / 12) / 100;
  payment = Math.floor((loanAmount * interest) / (1 - (1 + interest)**-insatallment));
  alert('aylık ödenecek faizli tutar : ' + payment);
}

