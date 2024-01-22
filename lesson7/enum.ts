enum ThanhTichHocTap {
    Nhat,
    Nhi,
    Ba
}

interface Student {
    name: string,
    point: number
}

const listStudent: Student[] = [
    {
        name: "Nguyễn Văn A",
        point: 9
    },
    {
        name: "Nguyễn Văn B",
        point: 4
    },
    {
        name: "Nguyễn Văn C",
        point: 7
    },
    {
        name: "Nguyễn Văn D",
        point: 6
    },
]

function findTop3() {
    const sortedStudent = listStudent.sort((a, b) => b.point - a.point);
    sortedStudent.slice(0, 3).forEach((stu, index) => {
        if (index === ThanhTichHocTap.Nhat) {
            console.log("Hạng nhất: ", stu.name);
        } else if (index === ThanhTichHocTap.Nhi) {
            console.log("Hạng nhì: ", stu.name);
        } else if (index === ThanhTichHocTap.Ba) {
            console.log("Hạng ba: ", stu.name);
        } else {
            console.log("Out Top");
        }
    });
}
findTop3()
