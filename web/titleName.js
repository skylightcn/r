function getTitleName(fileName) {
    var titleName=fileName
    if(titleName.startsWith('hs')){
        titleName="慧声"
    }else if(titleName.startsWith('jzz')){
        titleName="金种子"
    }else if(titleName.startsWith('mingbai')){
        titleName="明白"
    }else if(titleName.startsWith('xiwang')){
        titleName="希望"
    }else if(titleName.startsWith('tchf')){
        titleName="天赐洪福"
    }else if(titleName.startsWith('tdcs')){
        titleName="天地苍生"
    }else if(titleName.startsWith('zx')){
        titleName="真相"
    }else if(titleName.startsWith('1400zx')){
        titleName="谎言与真相"
    }else if(titleName.startsWith('gczy-final')){
        titleName="共产主义的终极目的"
    }else if(titleName.startsWith('9ping')){
        titleName="九评共产党"
    }else if(titleName.startsWith('jtdwh')){
        titleName="解体党文化"
    }else if(titleName.startsWith('M')){
        titleName="马克思的成魔之路"
    }else if(titleName.startsWith('jzmqr')){
        titleName="江泽民其人"
    }else if(titleName.startsWith('100commons')){
        titleName="关于中国的100个常识"
    }else if(titleName.startsWith('peace-road')){
        titleName="中国的和平转型之路"
    }else if(titleName.startsWith('who-is-new-china')){
        titleName="谁是新中国"
    }else if(titleName.startsWith('old-zou')){
        titleName="晚年周恩来"
    }else if(titleName.startsWith('mao-doctor-record')){
        titleName="毛泽东私人医生回忆录"
    }else if(titleName.startsWith('mao-story')){
        titleName="毛泽东鲜为人之的故事"
    }
    return titleName
}