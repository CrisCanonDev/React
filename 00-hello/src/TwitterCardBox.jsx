import { useState } from "react";

//adding parameter to reuse components (Props)
//   Using special prop children  (Inner text)
export function TwitterCardBox({ user, children}) {
    const [following, setFollowing] = useState(false);

    const handleClick = () => {
        setFollowing(!following)
    }


    //Declaring boolean variables that affect inner text and its style class applied based on following status 
    const textButton = following ? 'Follow' : 'Unfollow';
    const buttonClass = following
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button';

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    alt="Avatsrss"
                    src={`https://unavatar.io/twitter/${user}`}></img>
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">@{user}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClass} onClick={handleClick}>
                    {textButton}
                </button>
            </aside>
        </article>
    )
}