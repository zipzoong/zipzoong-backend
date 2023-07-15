export interface IUpload {
    /**
     * 리소스 접근 형식이다.
     *
     * private 리소스의 경우 접근을 위해 서버 단에서 추가적인 조치가 필요하다.
     *
     * private 리소스를 public access_type으로 등록할 경우 이미지에 접근하지 못하는 문제가 발생한다.
     */
    readonly access_type: IUpload.AccessType;
    /**
     * 리소스 url
     *
     * 해당 리소스를 저장하기 위해 url을 입력해야 한다면 presigned url이 아니라 url을 사용해야 한다.
     */
    readonly url: string;
    /**
     * 미리 서명된 url이란 실제 이미지나 영상 등의 리소스를 저장소에 업로드하기 위한 서명까지 받은 형태의 url로서 리소스를 업로드할 때 사용한다.
     */
    readonly presigned_url: string;
}

export namespace IUpload {
    export type AccessType = "public" | "zipzoong_s3";
    export type ResourceType = "profile" | "portfolio" | "biz_certification";
    export interface IBody {
        /**
         * 등록하고자 하는 리소스의 유형을 입력한다.
         *
         * 잘못된 리소스 타입을 입력할 경우 저장소 정책에 따라 잘못 변환되거나 삭제될 수 있다.
         */
        resource_type: ResourceType;
    }
}
