this.evalQ = function(qnum, ans) {
  if (qnum === 1 && ans === "sandy") return true;
  if (qnum === 1 && ans === "/sandy") return true;
  if (qnum === 1 && ans === "./sandy") return true;

  if (qnum === 2 && ans === "park/sandy") return true;
  if (qnum === 2 && ans === "/park/sandy") return true;
  if (qnum === 2 && ans === "./park/sandy") return true;

  if (qnum === 3 && ans === "../sandy") return true;
  if (qnum === 4 && ans === "../home/sandy") return true;
  if (qnum === 5 && ans === "../../../beach/sea/sandy") return true;
  if (qnum === 6 && ans === "../../home/sandy") return true;
  return false;
};
