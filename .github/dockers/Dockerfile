FROM python:3.13-bullseye

ARG USER=cnot
ARG USERID=1000
ARG GROUPID=${USERID}
ARG GROUP=${USER}
ARG PASSWORD=ciao

RUN apt-get update -y && \
	apt-get install -y curl vim whois sudo bash-completion git && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/*

RUN groupadd --gid ${GROUPID} ${GROUP}
RUN useradd -m --skel /etc/skel/ --base-dir /home/${USER} -p $(mkpasswd -m sha-512 ${PASSWORD}) --home-dir /home/${USER} --shell /bin/bash -g ${GROUP} -G sudo --uid ${USERID} ${USER}

USER ${USERID}:${GROUPID}
WORKDIR /home/${USER}

CMD [ "tail", "-f", "/dev/null" ]
