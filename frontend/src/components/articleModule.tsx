import styles from './articleModule.module.css'

export interface Contributor {
    id: number;
    name: string;
    bio: string;
  }

interface Props {
    title: string,
    heroImage: string,
    subtitle: string,
    contributors: Array<Contributor>
}

// export const ArticleModule = (props: Props) => {
//     return (
//         <div className={`${styles.module} pb-5`} style={{height: "100%"}}>
//             <div style={{transform:"translate(20%)"}}>
//                 <img className='w-75' src={props.heroImage} />
//                 <br/>
//                 <br/>
//             </div>
//             <div style={{transform:"translate(0%, -50%)"}}>
//             <div style={{fontSize:"3rem"}}>
//                 {props.title}<br/>
//             </div>
//         <div style={{background:"none"}}>
//             {props.subtitle}..<br/>
//         </div>
//             </div>
//         </div>
//     )
// }

// export const ArticleModule = (props: Props) => {
//     return (
//         <div className={`${styles.module} pb-5`} style={{height: "100%"}}>
//             <div style={{zIndex:"1"}}>
//                 <div style={{fontSize:"3rem"}}>
//                     {props.title}<br/>
//                 </div>
//                 <div style={{background:"none"}}>
//                     {props.subtitle}..<br/><br/>
//                 </div>
//             </div>
//             <div style={{zIndex:"-1"}}>
//                 <img className='w-100' src={props.heroImage} />
//             </div>
//         </div>
//     )
// }

export const ArticleModule = (props: Props) => {
    return (
        <div className={`${styles.module} pb-5`} style={{height: "100%"}}>
            <div className={styles.card} style={{zIndex:"1"}}>
                <img className='w-100' style={{borderRadius:"20px"}} src={props.heroImage} />
            </div>
            <div style={{zIndex:"-1"}}>
                <div style={{fontSize:"3rem"}}>
                    {props.title}<br/>
                </div>
                <div style={{background:"none"}}>
                    {props.subtitle}..<br/><br/>
                </div>
            </div>
        </div>
    )
}

// export const ArticleModule = (props: Props) => {
//     return (
//         <div className={`${styles.module} pb-5`} style={{height: "100%"}}>
//         <div className={styles.card} style={{color:"#FF5C00", backgroundImage:`url("${props.heroImage}")`, minHeight:"70%", backgroundSize:"cover", borderRadius:"5px"}}>
//             <div className='px-3 pt-3' style={{fontSize:"3rem"}}>{props.title}</div><br/>
//         </div>
//         <div className='p-3' style={{background:"none"}}>
//             {props.subtitle}..<br/>
//         </div>
//         </div>
//     )
// }