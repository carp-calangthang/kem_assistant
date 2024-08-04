
const Helper = {

    formatMoneyVND: (money: number) => {
        let v = money ? money.toString() : "";
        let preValue = v.indexOf("-") != -1 ? "-" : "";
        if (v.length > 0) {
            if (v.indexOf("0") === 0 && v.length > 1) v = v.slice(1);
            if (v.indexOf(",") !== -1) {
            v = v.replace(",", "");
            }
            return (
            preValue +
            v.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".") +
            " VNĐ"
            );
        } else {
            return "";
        }
    },

    formatMoneyUSD: (money: number) => {
        let v = money ? money.toString() : "";
        let preValue = v.indexOf("-") != -1 ? "-" : "";
        if (v.length > 0) {
            if (v.indexOf("0") === 0 && v.length > 1) v = v.slice(1);
            if (v.indexOf(",") !== -1) {
            v = v.replace(",", "");
            }
            return (
            preValue +
            v.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".") +
            " USD"
            );
        } else {
            return "";
        }
    },

}

export default Helper;