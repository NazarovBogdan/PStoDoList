import * as axios from 'axios';

const instanse = axios.create({
    baseURL: "http://PSToDoList/backend/"
})

export const apiRecord = (idDay) => {
    return instanse.get(`set_records.php?id=${idDay}`)
    .then(response => {
        return response.data
    })
}

export const apiDay = () => {
    return instanse.get(`WeekRecordings/dayofweek.php`)
    .then(response => {
        return response.data
    })
}

export const apiAddRecord = (params) => {
    return instanse({
        method: 'post',
        url: 'add_records.php',
        data: params
    }).then(response=> {
        return response.data
    })
}

export const apiDeleteRecord = (id) => {
    instanse({
        method: 'post',
        url: 'delete_records.php',
        data: id
    })
}

export const apiChangeRecord = (params) => {
    instanse({
        method: 'post',
        url: 'change_records.php',
        data: params
    })
}

