## lỗi nếu nhấn vào một user lần 1 đóng sau đó nhấn lần 2 sẽ bị mất thông tin user trên model

# fix lỗi

vì deps useEffect sẽ chạy lại khi data thay đổi nhưng bị lỗi ở trên vì ko reset data vẫn lấy data cũ nên useEffect ko chạy

# video 64
