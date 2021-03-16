window.config = {
	yfdai_address: '0xE35f19E4457A114A951781aaF421EC5266eF25Fe',
	yfdai_staking_address: '0xDD902D15B5A3C05BDBAeBE87E62B04F25B91117b',
	etherscan_baseURL: 'https://etherscan.io',
	default_gasprice_gwei: 180,
	default_gas_amount: 300000
}

window.YFDAI_STAKING_ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsTransferred","type":"event"},{"inputs":[],"name":"claimDivs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cliffTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToStake","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"depositedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberOfHolders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"}],"name":"getPendingDivs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStakingAndDaoAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastClaimedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingFeeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalClaimedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalEarnedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferAnyERC20Tokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unstakingFeeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToWithdraw","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]

;

window.YFDAI_ABI = [{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

window.cached_contracts = {}

// function to connect metamask
async function connectWallet() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        try {
            await window.ethereum.enable()
            console.log("Connected!")
            return true;
        } catch (e) {
            console.error(e)
            throw new Error("User denied wallet connection!")
        }
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
        console.log("connected to old web3")
        return true
    } else {
        throw new Error("No web3 detected!")
    }
}

/**
 * 
 * @param {"YFDAI" | "YFDAI_STAKING"} key 
 */
async function getContract(key) {
    let ABI = window[key+'_ABI']
    let address = window.config[key.toLowerCase()+'_address']
    if (!window.cached_contracts[key]) {
        window.cached_contracts[key] = new window.web3.eth.Contract(ABI, address, {from: await window.web3.eth.getCoinbase()})
    }
    
    return window.cached_contracts[key]
}

function getCoinbase() {
    return window.web3.eth.getCoinbase()
}


class YFDAI {
    async transfer(to, amount) {
        let contract = await getContract("YFDAI")
        return (await contract.methods.transfer(to, amount).send({gas: window.config.default_gas_amount, from: await window.web3.eth.getCoinbase(), gasPrice: window.config.default_gasprice_gwei*1e9}))
    }
    async totalSupply() {
        let contract = await getContract("YFDAI")
        return (await contract.methods.totalSupply().call())
    }
    async approve(spender, amount) {
        let contract = await getContract("YFDAI")
        return (await contract.methods.approve(spender, amount).send({gas: window.config.default_gas_amount, from: await getCoinbase(), gasPrice: window.config.default_gasprice_gwei*1e9}))
    }
    async balanceOf(address) {
        let contract = await getContract("YFDAI")
        return (await contract.methods.balanceOf(address).call())
    }
}

class YFDAI_STAKING {
	constructor() {
		[
			"cliffTime", 
			"depositedTokens", 
			"stakingTime", 
			"lastClaimedTime", 
			"totalEarnedTokens",
			"getPendingDivs",
			"getNumberOfHolders",

		].forEach(fn_name => {
			this[fn_name] = async function(...args) {
				let contract = await getContract("YFDAI_STAKING")
				return (await contract.methods[fn_name](...args).call())
			}
		});


		[
			"withdraw",
			"deposit",
			"claimDivs"
		].forEach(fn_name => {
			this[fn_name] = async function(...args) {
				let contract = await getContract("YFDAI_STAKING")
				return (await contract.methods[fn_name](...args).send({gas: window.config.default_gas_amount, from: await getCoinbase(), gasPrice: window.config.default_gasprice_gwei*1e9}))
			}
		})
	}

	async depositYfDAI(amount) {
		let yfdai_contract = await getContract("YFDAI")
		let yfdai_staking_contract = await getContract("YFDAI_STAKING")
        let batch = new window.web3.eth.BatchRequest()
        batch.add(yfdai_contract.methods.approve(window.config.yfdai_staking_address, amount).send.request({gas: window.config.default_gas_amount, from: await getCoinbase(), gasPrice: window.config.default_gasprice_gwei*1e9}))
        batch.add(yfdai_staking_contract.methods.deposit(amount).send.request({gas: window.config.default_gas_amount, from: await getCoinbase(), gasPrice: window.config.default_gasprice_gwei*1e9}))
		return batch.execute()
	}
	
}

window.yfdai = new YFDAI
window.yfdai_staking = new YFDAI_STAKING