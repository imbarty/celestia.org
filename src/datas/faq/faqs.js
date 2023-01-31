export const faqs = [
    {
        id: 1,
        question: 'What is Celestia?',
        text: 'Celestia is the first modular blockchain network. By decoupling consensus from execution, Celestia enables anyone to easily deploy their own blockchain, without the overhead of bootstrapping a new consensus network. Blockchains on Celestia are simultaneously scalable, sovereign and secure.',
    },{
        id: 2,
        question: 'What stage of development is Celestia in?',
        text: 'Celestia is at the testnet stage of development, approaching a mainnet launch later next year. In May 2022, we launched the Mamaki testnet for developers to openly test the network’s functionality. In December 2022, we upgraded the Mamaki testnet to Mocha and introduced a new developer-focused testnet, Arabica. In 2023, we plan to launch an incentivized testnet in the lead up to mainnet.',
    },{
        id: 3,
        question: 'Will Celestia have a token and if so, what will it be used for?',
        text: 'Celestia is designed to have a token used to secure the network via Proof of Stake and to pay for transaction fees on the network, and eventually a fee burn mechanism similar to EIP-1559 in Ethereum.',
    },{
        id: 4,
        question: 'How does Celestia scale?',
        text: 'Celestia is able to scale as the number of users (light nodes) in the network increases. Celestia remains secure so long as there are enough nodes on the network to sample the entire block. This means that as more nodes join the network and sample, the block size can increase accordingly without sacrificing security or decentralization. Doing so on a traditional blockchain would sacrifice decentralization because a bigger block size would create a larger hardware requirement for nodes to download and verify data. Rollups also depend on data availability for their scalability, so better scaling potential for Celestia will also translate to better scaling potential for the rollups utilizing Celestia.',
    },{
        id: 5,
        question: 'What is data availability and why is it important?',
        text: '<a href="https://docs.celestia.org/concepts/data-availability-faq" target="_blank" rel="noreferrer">Data availability</a> is critical to the security of any blockchain because it ensures that anyone can inspect the record of transactions and verify it. Data availability is the answer to the question, has this data been published? Users of a monolithic blockchain simply download all the data to check that it is available.<br><br>Data availability becomes a problem when you want to scale a blockchain. As the blocks get bigger, it becomes impractical for normal users to download all the data, and therefore users can no longer verify the chain. Through a new technique we call data availability sampling, normal users can check if the data has been published by downloading a tiny portion of the data, making it possible to verify very large blocks at a low cost.',
    },{
        id: 6,
        question: 'What is a rollup?',
        text: 'Rollups are a layer 2 scaling solution that aim to provide a cheaper platform for applications without sacrificing on security or decentralization. Rollups execute their own transactions but utilize other blockchains for consensus and data availability – dictating the cost of transaction fees. Celestia is a perfect complement to rollups as it provides them with a scalable chain that they can publish their transaction data at a low cost to users.<br><br>For more information about optimistic rollups, <a href="https://coinmarketcap.com/alexandria/article/optimistic-rollups-for-the-rest-of-us" target="_blank" rel="noreferrer">this post</a> by Celestia Labs co-founder (and creator of the optimistic rollup) John Adler is a good primer.',
    },{
        id: 7,
        question: 'Why do rollups require data availability?',
        text: 'Rollups come in two types that differ on data availability needs.<br><br>Optimistic rollups require data availability for the validity of the rollup execution. Ensuring data availability guarantees that the entire rollup block has been published which means that the honest nodes in the network can verify the block and alert the network if they detect fraud – keeping the rollup secure.<br><br> zkRollups don’t rely on data availability for the validity of the rollup execution, but rather require it to ensure that the rollup cannot be frozen. If zkRollup validators stop producing blocks, then it must be possible for new validators to step in and continue block production. If the transactions of zkRollup block are not published, then it is impossible for new validators to reconstruct the state of the chain. Without the state of the chain, these validators cannot create new blocks and the chain is effectively frozen. Ensuring that all transactions are published guarantees that new validators can reconstruct the state and that the chain cannot be frozen.',
    },{
        id: 8,
        question: 'How do I run a node on Celestia?',
        text: 'There are multiple types of nodes that users can run on Celestia’s Mocha and Arabica testnets. Information on setting up nodes can be found in our <a href="https://docs.celestia.org/nodes/overview" target="_blank" rel="noreferrer">documentation</a>.',
    },{
        id: 9,
        question: 'Can Celestia support both zk rollups and optimistic rollups?',
        text: 'Yes, Celestia doesn’t impose any restrictions on the types of rollups or blockchains that can use it. This means that anybody will be able to deploy a zk or optimistic rollup on top of Celestia.',
    },{
        id: 10, 
        question: 'Is Celestia only available for the Cosmos ecosystem?',
        text: 'No, blockchains from any network can deploy or utilize Celestia for data availability and consensus to tap into its shared security. What being a part of Cosmos does allow for is that the Celestia main chain has the option to connect to IBC and communicate with other IBC-enabled zones.',
    },{
        id: 11,
        question: 'What is the difference between Celestia and data storage blockchains like Arweave and Filecoin?',
        text: 'Celestia is a blockchain that focuses on data availability whereas blockchains like Filecoin and Arweave are focused on the separate problem of data storage.<br><br>Data availability is concerned with whether the data published in the latest block is available. This is distinctly different from data storage, which is concerned with storing data securely and providing guarantees that it can be accessed when needed.<br><br>These distinct focuses lead to differences between their target use-cases. Data storage blockchains are particularly focused on providing a decentralized way for data to be stored and accessed. Conversely, Celestia is designed to provide secure and scalable data availability for blockchains and specialized execution environments, like rollups.<br><br>For more information about data availability, <a href="https://coinmarketcap.com/alexandria/article/what-is-data-availability" target="_blank" rel="noreferrer">this post</a> by Celestia Labs co-founder Mustafa Al-Bassam is a good place to start.',
    },{
        id: 12,
        question: 'What guarantees for data storage does Celestia provide?',
        text: 'Celestia’s purpose is to provide a secure and scalable way to verify the availability of data. Once data has been verified as available, the job of storing and retrieving historical data is left up to other entities that require the data. Luckily, there are natural incentives for outside parties to store and serve historical data to users. There are multiple types of actors that may be likely to store historical data, such as block explorers, indexers, applications, and users themselves.',
    },
]
