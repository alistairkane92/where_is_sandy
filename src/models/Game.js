this.evalQ = function(qnum, ans) {
  if (qnum == 1 && ans == "sandy" || qnum == 1 && ans =="./sandy"){
    return true;
  } else if (qnum == 2 && ans == "park/sandy" || qnum == 2 && ans == "./park/sandy"){
    return true
  } else if (qnum == 3 && ans == "../home/sandy"){
    return true
  } else if (qnum == 4 && ans == "../../../../beach/sea/sandy"){
    return true
  } return false;
};
