import { test, expect } from '@playwright/test';

let naverURL = 'https://www.naver.com'
let daumURL = 'https://www.daum.net';

test.describe('네이버 포탈 ',()=>{
  test.beforeEach(async({ page })=>{
      await page.goto(naverURL);
  });

  test('네이버 검색창이 있는지 체크 ',async({ page })=>{
    await expect(page).toHaveURL(naverURL)
  });
  test('네이버 검색 창 입력 테스트 ',async ({ page })=>{
    await expect(page).toHaveURL('https://www.daum')

  })
})

test.describe('다음 포탈 ',()=>{
  test.beforeEach(async({ page })=>{
      await page.goto(daumURL);
  });

  test('다음 검색창이 있는지 체크 ',async({ page })=>{
    await expect(page).toHaveURL('https://www.naver')
  });

  test('다음 검색 창 입력 테스트 ',async ({ page })=>{
    await expect(page).toHaveURL(daumURL);
  })

})