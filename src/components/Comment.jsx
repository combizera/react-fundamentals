import { ThumbsUp, Trash } from '@phosphor-icons/react';

import { Avatar } from './Avatar';

import styles from './Comment.module.css';
import { useState } from 'react';
 
export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    // setLikeCount(likeCount + 1);

    // Forma indicada pelo React
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/combizera.png"
      />
 
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ygor Combi</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>
            {content}
          </p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir 
            <span>
              {likeCount}
            </span>
          </button>
        </footer>
      </div>
    </div>
  )
}