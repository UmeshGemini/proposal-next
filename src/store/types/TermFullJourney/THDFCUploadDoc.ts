export type THDFCUploadDocSingle = {
  requirement_cd: string;
  document_cd: string;
  requirement_desc: string;
  document_nm: string;
  document_desc: string;
  image_base64: string;
  document_type: string;
  upload_status: boolean;
  image_name: string;
};

export type THDFCUploadDoc = {
  data: THDFCUploadDocSingle[];
};
