import axios from "axios";
import { useForm } from "react-hook-form";
import Styles from "../Styles/upload.module.css";

const UploadItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = handleSubmit((data) => {
    axios({
      method: "post",
      url: "http://localhost:4000/upload",
      headers: { "Content-type": "multipart/form-data" },
      data: {
        files: data.files[0],
        name: data.name,
        id: data.id,
        ironwork: data.ironwork,
      },
    });
    reset({
      files: "",
      name: "",
      id: "",
      ironwork: "",
    });
  });

  return (
    <div className={Styles.container}>
      <form className={Styles.form} onSubmit={onSubmit}>
        <h1 className={Styles.headerText}>დაამატე მოდელი</h1>
        <input type="file" {...register("files")} className={Styles.inputs} />
        <select {...register("ironwork")} className={Styles.inputs}>
          <option value="">რას ამატებ?</option>
          <option value="door">კარი</option>
          <option value="gate">ჭიშკარი</option>
          <option value="stair">კიბე</option>
          <option value="slider-door">ვიტრაჟი</option>
          <option value="grill">მაყალი</option>
          <option value="Table">მაგიდა & თარო</option>
        </select>
        <input
          type="text"
          {...register("name")}
          placeholder="მაგ :(door, gate,)"
          className={Styles.inputs}
        />
        <input
          type="text"
          {...register("id")}
          placeholder="მაგ: (1001,2003,)"
          className={Styles.inputs}
        />
        <button type="submit" className={Styles.submitBtn}>
          ატვირთვა
        </button>
      </form>
    </div>
  );
};

export default UploadItem;
