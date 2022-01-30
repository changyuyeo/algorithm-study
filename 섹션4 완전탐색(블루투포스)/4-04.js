//? 4. 졸업 선물
//* 선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다.
//* 학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라고 했습니다.
//* 선생님이 가지고 있는 예산은 한정되어 있습니다.
//* 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.
//* 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 배송비는 할인에 포함되지 않습니다.

function solution(m, product) {
	let answer = 0
	let n = product.length

	//memo 총 비용으로 오름차순 정렬
	product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]))

	for (let i = 0; i < n; i++) {
		//memo money: 총 가격에서 i번째 상품을 할인 후 배송비를 더한 값을 현재 예산에서 뺀 값 = 남은 예산
		let money = m - (product[i][0] / 2 + product[i][1])
		let cnt = 1
		for (let j = 0; j < n; j++) {
			if (j !== i && product[j][0] + product[j][1] > money) break
			//memo 할인해서 산 상품을 제외한 나머지 상품들 남은 예산과 비교하며 반복탐색
			if (j !== i && product[j][0] + product[j][1] <= money) {
				money -= product[j][0] + product[j][1]
				cnt += 1
			}
		}
		answer = Math.max(answer, cnt)
	}

	return answer
}

let arr = [
	[6, 6],
	[2, 2],
	[4, 3],
	[4, 5],
	[10, 3]
]

//* solution(예산, [상품 가격, 배송비])
console.log(solution(28, arr))
