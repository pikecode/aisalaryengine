<template>
  <Teleport to="body">
    <Transition name="checkin-fade">
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
        @keydown.esc="close"
      >
        <div class="absolute inset-0 bg-black/45" @click="close"></div>

        <Transition name="checkin-pop">
          <div
            v-if="modelValue"
            ref="panelRef"
            class="relative z-[101] w-full max-w-[860px] overflow-hidden rounded-[28px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
            role="dialog"
            aria-modal="true"
            aria-label="打卡弹窗"
          >
            <button
              class="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
              type="button"
              @click="close"
              aria-label="关闭弹窗"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="checkin-hero relative overflow-hidden px-6 pt-8 pb-6 md:px-8 md:pt-10 md:pb-8">
              <div class="relative z-10 flex items-start justify-between gap-4">
                <div class="max-w-[420px]">
                  <div class="checkin-title">连续打卡<br />得奖励</div>
                  <p class="mt-3 text-[16px] font-medium text-[#1F2340]/85 md:text-[20px]">
                    获得一个限量的“领航员”徽章与一定会员优惠
                  </p>
                </div>

                <div class="hidden md:block checkin-hero-art">
                  <div class="checkin-art-card">
                    <div class="checkin-art-pill checkin-art-pill-a"></div>
                    <div class="checkin-art-pill checkin-art-pill-b"></div>
                    <div class="checkin-art-bell"></div>
                    <div class="checkin-art-circle"></div>
                    <div class="checkin-art-check"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-[#F4F4FF] px-4 pb-6 pt-5 md:px-6 md:pb-8">
              <div class="relative overflow-hidden rounded-[22px] bg-white/80 px-3 py-4 md:px-5 md:py-5">
                <div
                  class="grid gap-3 md:gap-4"
                  :class="expanded ? 'grid-cols-2 sm:grid-cols-3 md:grid-cols-7' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-7 checkin-grid-collapsed'"
                >
                  <div
                    v-for="day in checkinDays"
                    :key="day.label"
                    class="checkin-day-card"
                    :class="day.variant"
                  >
                    <div class="checkin-day-status">{{ day.status }}</div>
                    <div class="checkin-day-bonus">{{ day.bonus }}</div>
                    <div class="checkin-day-label">{{ day.label }}</div>
                  </div>
                </div>

                <button
                  v-if="!expanded"
                  type="button"
                  class="checkin-expand"
                  @click="expanded = true"
                >
                  点击展开
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>

              <button type="button" class="checkin-primary-btn" @click="close">
                打卡
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const expanded = ref(false)
const panelRef = ref<HTMLElement | null>(null)

const checkinDays = computed(() => {
  const days = [
    { label: '第一天', status: '已打卡', bonus: '+5', variant: 'is-complete' },
    { label: '第二天', status: '已打卡', bonus: '+5', variant: 'is-complete' },
    { label: '第三天', status: '已打卡', bonus: '+5', variant: 'is-complete' },
    { label: '第四天', status: '已打卡', bonus: '+5', variant: 'is-complete' },
    { label: '第五天', status: '已打卡', bonus: '+5', variant: 'is-complete' },
    { label: '第六天', status: '已打卡', bonus: '+5', variant: 'is-complete' },
    { label: '第七天', status: '已打卡', bonus: '+5 +10', variant: 'is-complete' },
    { label: '第八天', status: '已打卡', bonus: '+5', variant: 'is-complete' },
    { label: '第九天', status: '已打卡', bonus: '+5', variant: 'is-complete' },
    { label: '第十天', status: '未打卡', bonus: '+5', variant: 'is-pending' },
    { label: '第十一天', status: '已打卡', bonus: '+5', variant: 'is-complete' },
    { label: '第十二天', status: '已打卡', bonus: '+5', variant: 'is-complete' },
    { label: '第十三天', status: '已打卡', bonus: '+5', variant: 'is-complete' },
    { label: '第十四天', status: '今天', bonus: '+5', variant: 'is-today' },
    { label: '第十五天', status: '未打卡', bonus: '+5', variant: 'is-pending' },
    { label: '第十六天', status: '未打卡', bonus: '+5', variant: 'is-pending' },
    { label: '第十七天', status: '未打卡', bonus: '+5', variant: 'is-pending' },
    { label: '第十八天', status: '未打卡', bonus: '+5', variant: 'is-pending' },
    { label: '第十九天', status: '未打卡', bonus: '+5', variant: 'is-pending' },
    { label: '第二十天', status: '未打卡', bonus: '+5', variant: 'is-pending' },
    { label: '第二十一天', status: '未打卡', bonus: '+5', variant: 'is-pending' }
  ]

  return days
})

const close = () => {
  emit('update:modelValue', false)
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.modelValue) {
    close()
  }
}

watch(
  () => props.modelValue,
  (value) => {
    if (!value) {
      expanded.value = false
      return
    }
    expanded.value = false
  }
)

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.checkin-fade-enter-active,
.checkin-fade-leave-active {
  transition: opacity 0.22s ease;
}

.checkin-fade-enter-from,
.checkin-fade-leave-to {
  opacity: 0;
}

.checkin-pop-enter-active,
.checkin-pop-leave-active {
  transition: transform 0.22s ease, opacity 0.22s ease;
}

.checkin-pop-enter-from,
.checkin-pop-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.98);
}

.checkin-hero {
  background: linear-gradient(180deg, #2339ff 0%, #2a42ff 55%, #8c87ff 100%);
}

.checkin-title {
  color: #ffffff;
  font-family: 'PingFang SC', sans-serif;
  font-weight: 900;
  font-size: 42px;
  line-height: 0.95;
  letter-spacing: 1px;
  text-shadow:
    -3px -3px 0 #2f3cff,
    3px -3px 0 #2f3cff,
    -3px 3px 0 #2f3cff,
    3px 3px 0 #2f3cff,
    0 4px 0 rgba(10, 15, 80, 0.2);
  -webkit-text-stroke: 5px #ffffff;
}

.checkin-hero-art {
  width: 250px;
  height: 160px;
  position: relative;
}

.checkin-art-card {
  position: absolute;
  inset: 0;
  border-radius: 28px;
  background: linear-gradient(135deg, #f6f7ff 0%, #ffffff 60%, #ececff 100%);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.7);
}

.checkin-art-pill {
  position: absolute;
  border-radius: 999px;
  opacity: 0.95;
}

.checkin-art-pill-a {
  width: 88px;
  height: 34px;
  left: 22px;
  top: 18px;
  background: linear-gradient(90deg, #08d4e7 0%, #3a7bff 100%);
  transform: rotate(-18deg);
}

.checkin-art-pill-b {
  width: 62px;
  height: 34px;
  right: 30px;
  top: 22px;
  background: linear-gradient(90deg, #ffbf3d 0%, #ffda6d 100%);
  transform: rotate(10deg);
}

.checkin-art-bell {
  position: absolute;
  right: 8px;
  top: 28px;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(180deg, #ffd35f 0%, #ffb52c 100%);
  box-shadow: inset 0 -10px 0 rgba(255, 255, 255, 0.28);
}

.checkin-art-circle {
  position: absolute;
  right: 70px;
  bottom: 20px;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 6px solid rgba(96, 129, 255, 0.8);
}

.checkin-art-check {
  position: absolute;
  right: 102px;
  top: 48px;
  width: 54px;
  height: 54px;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.checkin-grid-collapsed {
  max-height: 335px;
  overflow: hidden;
}

.checkin-day-card {
  min-height: 96px;
  border-radius: 18px;
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  text-align: center;
  background: #ffffff;
  box-shadow: 0 8px 20px rgba(25, 27, 82, 0.05);
}

.checkin-day-card.is-complete {
  color: #2540ff;
}

.checkin-day-card.is-pending {
  color: rgba(35, 35, 35, 0.28);
}

.checkin-day-card.is-today {
  color: #ffffff;
  background: linear-gradient(180deg, #243cff 0%, #0f2eff 100%);
  box-shadow: 0 10px 24px rgba(36, 60, 255, 0.24);
}

.checkin-day-status {
  font-size: 12px;
  line-height: 1;
  font-weight: 600;
}

.checkin-day-bonus {
  font-size: 18px;
  line-height: 1;
  font-weight: 800;
}

.checkin-day-label {
  font-size: 12px;
  line-height: 1.2;
  font-weight: 500;
}

.checkin-expand {
  position: absolute;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #333333;
  font-size: 14px;
  font-weight: 500;
  background: transparent;
  border: none;
}

.checkin-primary-btn {
  width: 100%;
  height: 44px;
  margin-top: 18px;
  border: none;
  border-radius: 12px;
  background: linear-gradient(90deg, #1427ff 0%, #a114ff 100%);
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  box-shadow: 0 10px 24px rgba(34, 37, 255, 0.29);
}

@media (max-width: 767px) {
  .checkin-title {
    font-size: 30px;
    -webkit-text-stroke: 3px #ffffff;
  }

  .checkin-hero {
    padding-left: 18px;
    padding-right: 18px;
  }

  .checkin-hero-art {
    display: none;
  }

  .checkin-day-card {
    min-height: 82px;
    border-radius: 14px;
  }

  .checkin-day-status {
    font-size: 10px;
  }

  .checkin-day-bonus {
    font-size: 15px;
  }

  .checkin-day-label {
    font-size: 10px;
  }

  .checkin-expand {
    font-size: 12px;
  }
}
</style>
