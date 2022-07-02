import { Form, Divider, Input, InputNumber, Button, Upload, message } from "antd";
import "./UploadPage.css";
import { useState } from "react";

function UploadPage() {
	const [ imageUrl, setimageUrl ]= useState(null);
	const onSubmit = (values) => {
		console.log(values);
	};
	const onChangeImage = () => {
		setimageUrl(imageUrl)
	}
	return (
		<div id="body">
			<div id="upload-container">
				<Form name="상품 업로드" onFinish={onSubmit}>
					<Form.Item name="upload" label={<div className="upload-label">상품 사진</div>}>
						<Upload name="image" listType="picture" showUploadList={false} onChange={onChangeImage}>
							<div id="upload-img-placeholder">
								<img src="/images/icons/camera.png" />
								<span>이미지를 업로드해주세요.</span>
							</div>
						</Upload>
					</Form.Item>
					<Divider />
					<Form.Item label={<div className="upload-label">판매자명</div>} name="seller" rules={[{ required: true, message: "판매자명을 입력해주세요" }]}>
						<Input className="upload-name" size="large" placeholder="이름을 입력해주세요" />
					</Form.Item>
					<Divider />
					<Form.Item name="name" label={<div className="upload-label">상품명</div>} rules={[{ required: true, message: "상품명을 입력해주세요" }]}>
						<Input className="upload-name" size="large" placeholder="상품명을 입력해주세요" />
					</Form.Item>
					<Divider />
					<Form.Item name="price" label={<div className="upload-label">판매가</div>} rules={[{ required: true, message: "판매가를 입력해주세요" }]}>
						<InputNumber className="upload-price" size="large" defaultValue={0} />
					</Form.Item>
					<Divider />
					<Form.Item name="description" label={<div className="upload-label">상품설명</div>} rules={[{ required: true, message: "상품설명을 입력해주세요" }]}>
						<Input.TextArea size="large" id="product-description" showCount maxLength={300} placeholder="상품설명을 작성해주세요" />
					</Form.Item>
					<Form.Item>
						<Button id="submit-button" size="large" htmlType="submit">
							상품등록하기
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}
export default UploadPage;