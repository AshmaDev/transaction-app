function padTo2Digits(num: number) {
    return num.toString().padStart(2, "0");
}

export const formatDate = (date: string) => {
    if (!date) return "";
    const formatedDate = new Date(date);
    const dateString = [
        padTo2Digits(formatedDate.getDate()),
        padTo2Digits(formatedDate.getMonth() + 1),
        formatedDate.getFullYear(),
    ].join(".");

    const timeString = [formatedDate.getHours(), formatedDate.getMinutes()].join(":");

    return `${dateString} ${timeString}`;
};