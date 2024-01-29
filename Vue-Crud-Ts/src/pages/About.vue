<template>
  <div class="app-container">
    <div class="app-welcome">
      Chào mừng bạn đến với ứng dụng quản lý công việc hàng ngày của chúng tôi!
      Chúng tôi tạo ra ứng dụng này với mục tiêu giúp bạn dễ dàng tổ chức và
      theo dõi công việc hàng ngày một cách hiệu quả.
    </div>

    <div class="app-functionalities">
      <div class="app-functionality-header">Chức Năng Chính:</div>
      <ul class="app-functionality-list">
        <li class="app-functionality-item">
          Tạo Danh Sách Công Việc: Tạo danh sách công việc trong ngày một cách
          nhanh chóng và thuận tiện.
        </li>
        <li class="app-functionality-item">
          Sửa Đổi Công Việc: Sửa đổi nhanh chóng mọi công việc để phản ánh thay
          đổi trong kế hoạch của bạn.
        </li>
        <li class="app-functionality-item">
          Đánh Dấu Công Việc Đã Hoàn Thành: Đánh dấu công việc đã hoàn thành để
          theo dõi tiến độ và cảm giác thành tựu.
        </li>
      </ul>
    </div>

    <div class="app-workflow">
      <div class="app-workflow-header">Quy Trình Làm Việc:</div>
      <ul class="app-workflow-list">
        <li class="app-workflow-item">
          Thêm Công Việc: Bấm nút "Thêm Công Việc" và nhập thông tin công việc
          mới của bạn.
        </li>
        <li class="app-workflow-item">
          Sửa Đổi Công Việc: Bạn có thể sửa đổi bất kỳ thông tin nào bằng cách
          nhấp vào công việc đó trong danh sách.
        </li>
        <li class="app-workflow-item">
          Đánh Dấu Công Việc Đã Hoàn Thành: Khi công việc hoàn thành, chạm vào
          biểu tượng đánh dấu để làm nổi bật nó trong danh sách.
        </li>
      </ul>
    </div>

    <div class="app-contact-support">
      <div class="app-contact-support-header">Liên Hệ và Hỗ Trợ:</div>
      <p class="app-contact-support-text">
        Nếu bạn có bất kỳ câu hỏi hoặc góp ý nào, đừng ngần ngại liên hệ với
        chúng tôi qua email:
        <span class="app-contact-support-email">uyen99ntt@gmail.com</span>.
        Chúng tôi luôn sẵn sàng hỗ trợ bạn.
      </p>
    </div>

    <div class="app-thank-you">
      Cảm ơn bạn đã sử dụng ứng dụng của chúng tôi!
    </div>
  </div>
</template>

<style lang="scss">
.app {
  &-container {
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 6px;
  }

  &-welcome {
    margin: 20px 0;
    font-size: larger;
    font-weight: 600;
    line-height: 28px;
  }

  &-functionalities {
    margin: 20px 0;
  }

  &-functionality {
    &-header {
      font-size: large;
      font-weight: 500;
      line-height: 28px;
    }

    &-item {
      margin: 4px 0;
    }
  }
  &-workflow {
    margin: 20px 0;

    &-header {
      font-size: large;
      font-weight: 500;
      line-height: 28px;
    }

    &-item {
      margin: 4px 0;
    }
  }
  &-contact-support {
    &-header {
      font-size: large;
      font-weight: 500;
      line-height: 28px;
    }
    &-text {
      margin: 4px 0;
    }
    &-email {
      color: rgb(33, 189, 251);
    }
  }
  &-thank-you {
    margin: 20px 0;
    font-size: largre;
    font-weight: 600;
    line-height: 28px;
  }
}
</style>
