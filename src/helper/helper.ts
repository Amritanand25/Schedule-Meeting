import { Availability } from "../models/AvailabilityModel";

export const filterAvailability = (selectedDate: string, selectedDuration: number, appointmentList: any) => {
    let res: Availability[] = [];
    let prev = 0;

    if (selectedDuration <= 0) {
        return res;
    }

    for (let i = 8; i < 20; i++) {

        for (let j = prev; j < 60;) {
            console.log("Hello" + i + j);
            res.push(
                {
                    id: Date.now() + i + j,
                    time: (i > 12 ? (i % 12) : i) + ":" + (j === 0 ? "00" : j),
                    isSelected: false,
                    timeType: i >= 12 ? 'PM' : 'AM',
                    start: (i) + '' + (j === 0 ? "00" : j),
                    end: (((j + selectedDuration) === 60) ? i + 1 : i) + '' + (((j + selectedDuration) === 0 || (j + selectedDuration === 60)) ? '00' : j + selectedDuration)
                }
            );
            j = j + selectedDuration;
        }
    }

    if (appointmentList.length === 0) {
        return res;
    }

    console.log(appointmentList);
    //let currentDate = Object.keys(appointmentList)[0];
    let currentDetails:any = Object.values(appointmentList)[0];
    console.log(currentDetails);
    if(!currentDetails){
        return res;
    }
    let entries:any = Object.entries(currentDetails);
    let temp:any = {};
    for(let i=0; i<res.length; i++)
    {
        for(let j=0; j<entries.length; j++)
        {
            let resStart = +res[i].start;
            let resEnd = +res[i].end;
            let entrStart = +entries[j][1]?.raw?.start;
            let entrEnd = +entries[j][1]?.raw?.end;
            if(resStart)
            for(let k =resStart; k<resEnd; k++)
            {
                if(k>= entrStart && k<=entrEnd)
                {
                    // let h = entries[j][1]?.raw?.time + " " + entries[j][1]?.raw?.timeType;
                    temp[`${k}`] = 1;
                    let str = k.toString();
                    let l1 = "" , l2 = "";
                    if(str.length === 3)
                    {
                        l1 = str[0];
                        l2 = str[1] + str[2]
                    }else if(str.length === 4){
                        l1 = str[0] + str[1];
                        l2 = str[3] + str[4];
                    }
                   if(+l2 === 60)
                   {
                    l1 = (+l1 + 1).toString();
                    l2 = '00';
                    k = +(l1 + l2);
                   }
                }
            }
        }
    }
    console.log(temp);
    temp = Object.keys(temp);
    temp.map((item: string) => {
        res = res.filter(d => {
            let t1 = +d.start;
            let t2 = +d.end;
            if(+item >= t1 && +item <=t2)
            {
                return false;
            }
            return true;
        })
        return item;
    })

    return res;
}