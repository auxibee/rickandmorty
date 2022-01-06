import styles from './button.module.css'
import cn from 'classnames'

const BaseButton = ({children, ...props}) => {
    return ( 
        <button type="button" {...props}> {children} </button>
     );
}

const LinkButton = ({href, children, ...props}) => {
    return ( 
        <a href={href} {...props}>{children} </a>
     );
}
 
const Button = ({children,primary,customStyle, ...props}) => {
    const HocButton = props.href ? LinkButton : BaseButton
    return ( 
        <HocButton className={cn(styles.button, primary && styles.primary, customStyle)} {...props}> {children} </HocButton>
     );
}
 
export default Button;
 