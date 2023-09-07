import Eng from "../models/eng.js";

export const createEng = async (req, res) => {


    try {

        const newEng = new Eng({ ...req.body })


        await newEng.save()

        res.status(200).send({ status: 'success', message: newEng });



    } catch (err) {

        return res.status(400).send({ status: false, message: "give another shot 😊" })

    }


}

export const getEngineers = async (req, res) => {

    try {
        const engineers = await Eng.find()

        return res.status(200).send(engineers);
    } catch (err) {
        console.log("error getting posts", err);
    }

};

export const getVerifiedEngineers = async (req, res) => {

    try {
        const engineers = await Eng.find({ verified: true })

        return res.status(200).send(engineers);
    } catch (err) {
        console.log("error getting posts", err);
    }

};
export const getUnVerifiedEngineers = async (req, res) => {

    try {
        const engineers = await Eng.find({ verified: false })

        return res.status(200).send(engineers);
    } catch (err) {
        console.log("error getting posts", err);
    }

};


// export const getPostById = async (req, res) => {
//     try {

//         const postId = req.params.id;
//         const post = await Post.findById(postId).populate("author", "-password");

//         if (!post) {
//             return res.status(400).send({ status: false, message: "unknown post" });
//         }

//         return res.status(200).send({ status: true, message: post });

//     } catch (err) {
//         console.log("error getting post", err);
//         return res.status(400).send({ status: false, message: "something went wrong" });
//     }
// };


export const updateEng = async (req, res) => {
    try {

        const id = req.params.id
        console.log(id)


        const { verified } = req.body

        console.log(verified)
        // const { title, content } = req.body;

        const eng = await Eng.findById(id);

        if (!eng) return res.status(404).send("Not Found");

        // get current user

        // const currentUser = req.user._id;

        // if (currentUser.toString() !== post.author.toString()) {
        //     return res.status(403).send("posts must update the original author ");
        // }

        // update post now
        await Eng.findOneAndUpdate({ _id: id }, { verified }, { new: true });

        res.status(200).send("updated engineer");

    } catch (err) {
        console.log("error updating post", err);
        res.status(400).send("error updating post");
    }
};
export const removeVerifiedEng = async (req, res) => {
    try {

        const id = req.params.id


        const { verified } = req.body

        console.log(verified)
        // const { title, content } = req.body;

        const eng = await Eng.findById(id);

        if (!eng) return res.status(404).send("Not Found");


        // }

        // update post now
        await Eng.findOneAndUpdate({ _id: id }, { verified }, { new: true });

        res.status(200).send("updated engineer");

    } catch (err) {
        console.log("error updating post", err);
        res.status(400).send("error updating post");
    }
};

export const deletePost = async (req, res) => {
    try {

        const post = await Post.findById(req.params.id);

        if (!post) return res.status(404).send("Not Found");

        // get current user

        const currentUser = req.user._id;

        if (currentUser.toString() !== post.author.toString()) {
            return res.status(403).send("posts must delete the original author ");
        }

        await Post.findByIdAndRemove(req.params.id);

        res.status(200).send("deleted successfully");

    } catch (err) {
        console.log("error deleting post", err);
        res.status(404).send("error deleting post");
    }
};
