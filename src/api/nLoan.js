import request from '@/utils/request';

export function getInitData(params) {
    return request({
        url: '/init/initLoanData',
        method: 'get',
        params
    });
}

export function saveLoanInfo(params) {

    return request({
        url: '/create/saveLoanInfo',
        method: 'post',
        data: params
    });
}

export function getPartnerInfo () {
    return request({
        url: '/partnerInfo/getPartnerInfo',
        method: 'get'
    });
}
export function getPartnerData (partnerCode) {
    return request({
        url: '/getPartnerData',
        method: 'post',
        params: { partnerCode: partnerCode}
    });
}