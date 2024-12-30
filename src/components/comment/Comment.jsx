import React, { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc, onSnapshot } from "firebase/firestore";
import styles from "./Comment.module.css";

export const Comment = () => {
    const [users, setUsers] = useState([]);
    const [newName, setNewName] = useState("");
    const [newComment, setNewComment] = useState("");
    const [editing, setEditing] = useState(null);

    const usersCollectionRef = collection(db, "users");

    useEffect(() => {
        const unsubscribe = onSnapshot(usersCollectionRef, (snapshot) => {
            const usersList = snapshot.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().Name,
                comment: doc.data().Comment,
            }));
            setUsers(usersList);
        });

        return () => unsubscribe();
    }, []);

    const createComment = async () => {
        await addDoc(usersCollectionRef, { Name: newName, Comment: newComment });
        setNewName("");
        setNewComment("");
    };

    const deleteComment = async (id) => {
        await deleteDoc(doc(db, "users", id));
    };

    const editComment = async (id) => {
        setEditing(id);
        const user = users.find((user) => user.id === id);
        if (user) {
            setNewName(user.name);
            setNewComment(user.comment);
        }
    };

    const updateComment = async (id) => {
        const commentRef = doc(db, "users", id);
        await updateDoc(commentRef, { Name: newName, Comment: newComment });
        setEditing(null);
        setNewName("");
        setNewComment("");
    };

    return (
        <>
            <section className={styles.container} id="comments">
                <h2 className={styles.title}>Comments</h2>
                <div className={styles.commentSection}>
                    <div className={styles.form}>
                        <input className={styles.input}
                            type="text"
                            placeholder="Name"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />
                        <input className={styles.input}
                            type="text"
                            placeholder="Comment"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <button onClick={createComment} className={styles.input}>Add Comment</button>
                    </div>
                    <ul>
                        {users.map((user) => (
                            <div className={styles.containerComment}>
                                <div key={user.id}>
                                    {editing === user.id ? (
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Name"
                                                value={newName}
                                                onChange={(e) => setNewName(e.target.value)}
                                            />
                                            <input
                                                type="text"
                                                placeholder="Comment"
                                                value={newComment}
                                                onChange={(e) => setNewComment(e.target.value)}
                                            />
                                            <button onClick={() => updateComment(user.id)}>
                                                Update
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                        <div className={styles.theComments}>
                                            <div className={styles.hasil}>
                                                <strong className={styles.nameComment}>{user.name}:</strong><p className={styles.commentComment}> {user.comment}
                                                <button onClick={() => editComment(user.id)}>
                                                    Edit
                                                </button>
                                                <button onClick={() => deleteComment(user.id)}>
                                                    Delete
                                                </button></p>
                                            </div>
                                        </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
};