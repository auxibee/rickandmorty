
import Button from './button';


export default {
    title : 'Elements/Button',
    component: Button
}

export  const ActiveLink = () => <Button href="#" active> Active Link </Button>

export  const NonActiveLink = () => <Button href="#" notactive> Normal Link </Button>

export const PrimaryButton = () => <Button primary> Search </Button>

export const AliveButton = () => <Button primary status="alive"> Alive </Button>

export const DeadButton = () => <Button primary status="dead"> Dead </Button>

export const UnknownButton = () => <Button primary status="unknown"> Unknown </Button>