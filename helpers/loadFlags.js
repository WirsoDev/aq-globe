import PTflag from '../public/static/flags/pt.svg'
import FRflag from '../public/static/flags/fr.svg'
import DEflag from '../public/static/flags/de.svg'


const resolvFlag = (target)=>{
    switch (target) {
        case 'pt':
            return PTflag
            break;
        case 'fr':
            return FRflag
        case 'de':
            return DEflag
        default:
            return ''
            break;
    }
}

export {resolvFlag}