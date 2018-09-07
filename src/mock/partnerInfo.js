import Mock from 'mockjs';

export default {
    getPartnerInfo: () => ([
        {
            partnerCode: '0000000000000000001',
            partnerName: '刘亚东',
            clientNo: '110',
            partnerType: '1',
            drwdownType: '1',
            contributiveType: 'C',
            joinType: 'M',
            rateLimitFlag: 'Y',
            rateRatio: '20%',
            limitCheckFlag: 'Y',
            limitCycle: 'Y',
            ccy: 'CHN',
            partnerLimit: '1000'
        }, {
            partnerCode: '0000000000000000002',
            partnerName: '刘亚东',
            clientNo: '110',
            partnerType: '1',
            drwdownType: '1',
            contributiveType: 'C',
            joinType: 'M',
            rateLimitFlag: 'Y',
            rateRatio: '20%',
            limitCheckFlag: 'Y',
            limitCycle: 'Y',
            ccy: 'CHN',
            partnerLimit: '1000'
        }
    ]),
    getPartnerData: (value) => ({
            partnerCode: {
            partnerName: '刘亚东',
            clientNo: '110',
        }

})
}
