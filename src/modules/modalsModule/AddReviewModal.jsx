import {useState} from "react";
import {Button, Modal, ModalBody, ModalContent, Textarea} from "@nextui-org/react";
import StarGrayIcon from "@/utilis/Icons/StarGrayIcon";
import ReactStars from "react-rating-stars-component";

const AddReviewModal = ({isOpen, onOpenChange}) => {
    const [rateForm, setRateForm] = useState({
        rate: 0, comment: "",
    });
    const ratingChanged = (newRating) => {
        setRateForm({
            ...rateForm, rate: newRating,
        });
    };
    return (<Modal isOpen={isOpen} size={"3xl"} onOpenChange={onOpenChange} classNames={{
        base: "p-[20px]",
    }}>
        <ModalContent>
            <ModalBody>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-[20px] font-medium">Give your rating</h2>
                    <ReactStars
                        count={5}
                        value={rateForm.rate}
                        emptyIcon={<StarGrayIcon/>}
                        fullIcon={<StarGrayIcon/>}
                        onChange={ratingChanged}
                        isHalf={true}
                        edit={true}
                        size={54}
                        activeColor="#ffd700"
                    />
                </div>
                <div>
                    <Textarea
                        placeholder="Add a Comment"
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
                <Button size={"lg"} isDisabled={rateForm.rate === 0 || rateForm.comment === ""}
                        className="bg-[--primary-color] text-white mx-auto md:w-1/2">Submit</Button>
            </ModalBody>
        </ModalContent>
    </Modal>);
}

export default AddReviewModal;