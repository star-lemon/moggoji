

function cookie_decision(req,res,target){
    switch (target){
        case 'loginId':

            if (typeof des_loginId(req) != 'undefined') {
                return des_loginId(req)
            } else {
                return false
            }
            break
        case 'test':
            return 'test'
            break
        default:
            res.redirect('/error')
    }
}

function des_loginId(req){
    return req.signedCookies.loginId;
}


module.exports = cookie_decision
