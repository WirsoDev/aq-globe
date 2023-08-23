import PTflag from '../public/static/flags/pt.svg'
import FRflag from '../public/static/flags/fr.svg'
import DEflag from '../public/static/flags/de.svg'
import PLflag from '../public/static/flags/pl.svg'
import CHflag from '../public/static/flags/ch.svg'
import ATflag from '../public/static/flags/at.svg'
import BEflag from '../public/static/flags/be.svg'
import NLflag from '../public/static/flags/nl.svg'
import ROflag from '../public/static/flags/ro.svg'
import CNflag from '../public/static/flags/cn.svg'


const resolvFlag = (target)=>{
    switch (target) {
        case 'pt':
            return PTflag
            break;
        case 'fr':
            return FRflag
            break;
        case 'pl':
            return PLflag
            break;
        case 'de':
            return DEflag
            break;
        case 'ch':
            return CHflag
            break;
        case 'at':
            return ATflag
            break;
        case 'be':
            return BEflag
            break;
        case 'nl':
            return NLflag
            break;
        case 'ro':
            return ROflag
            break;
        case 'cn':
            return CNflag
            break;
        default:
            return ''
            break;
    }
}

export {resolvFlag}