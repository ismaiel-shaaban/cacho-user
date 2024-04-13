import {useState} from "react";
import {Button, Modal, ModalBody, ModalContent, Textarea} from "@nextui-org/react";
import StarGrayIcon from "@/utilis/Icons/StarGrayIcon";
import ReactStars from "react-rating-stars-component";
import {getCookie} from "cookies-next";
import {strings} from "@/utilis/Localization";

const AddReviewModal = ({isOpen, onOpenChange , id}) => {
    const [rateForm, setRateForm] = useState({
        rating: 1, comment: "", isAnonymous :false
    });
    const ratingChanged = (newRating) => {
        setRateForm({
            ...rateForm, rating: newRating,
        });
    };

    const handelSubmit = async (e) => {
        e.preventDefault();
        console.log(rateForm)
        const token = await getCookie('token');
        const res = await fetch(`https://caco-dev.mimusoft.com/api/customer/businesses/${id}/reviews`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rateForm)
        });
        if (res.ok) {
            onOpenChange(false);
            setRateForm({
                rating: 1, comment: "", isAnonymous :false
            })
        }
    };

    return (<Modal isOpen={isOpen}
                   dir={strings.getLanguage() === "en" ? "ltr" : "rtl"}
                   size={"3xl"} onOpenChange={onOpenChange} classNames={{
        base: "p-[20px]",
    }}>
        <ModalContent>
            <ModalBody>
                <form onSubmit={handelSubmit}>
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-[20px] font-medium">{strings.GiveYourRating}</h2>
                        <ReactStars
                            count={5}
                            value={rateForm.rating}
                            emptyIcon={<StarGrayIcon/>}
                            fullIcon={<StarGrayIcon/>}
                            onChange={ratingChanged}
                            isHalf={false}
                            edit={true}
                            size={54}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div>
                        <Textarea
                            placeholder={strings.AddAComment}
                            className="w-full"
                            classNames={{
                                inputWrapper: "bg-[--gray] rounded-[10px]", input: "placeholder:text-[#C8C8C8]",
                            }}
                            value={rateForm.comment}
                            onChange={(e) => setRateForm({
                                ...rateForm, comment: e.target.value,
                            })}
                        />
                    </div>
                    <div className="flex justify-center mt-3">
                        <Button size={"lg"} isDisabled={rateForm.comment === ""}
                                type={"submit"}
                                className="bg-[--primary-color] text-white mx-auto md:w-1/2">{strings.Submit}</Button>
                    </div>
                </form>
            </ModalBody>
        </ModalContent>
    </Modal>);
}

export default AddReviewModal;